import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileImage } from '../interfaces/file-image';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}
  private collectionName = 'products';
  private filePath: string;
  private downloadURL: Observable<string>;

  private saveProduct(product: Product) {
    return this.db.collection(this.collectionName).add(product);
  }
  getProduct(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db
      .collection<Product>(this.collectionName, (ref) =>
        ref.orderBy('name', 'asc')
      )
      .get();
  }
  editProductFragment(id: string, obj: Object) {
    return this.db.collection(this.collectionName).doc(id).update(obj);
  }
  deleteProduct(id: string) {
    return this.db.collection(this.collectionName).doc(id).delete();
  }
  preEdit(id: string, image: FileImage, produc: Product) {
    this.uploadImageEditProduct(id, image, produc);
  }
  preAdd(produc: Product, image: FileImage) {
    this.uploadImageCreateProduct(produc, image);
  }
  private uploadImageCreateProduct(product: Product, image: FileImage) {
    const id = Math.random().toString(36).substring(2);
    this.filePath = `products_images/${image.name + id}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((urlImage) => {
            this.downloadURL = urlImage;
            const prod: Product = {
              name: product.name,
              category: product.category,
              provider: product.provider,
              existence: product.existence,
              price: product.price,
              photo: this.downloadURL,
              description: product.description,
              qualification: product.qualification,
              sales_quantity: product.sales_quantity,
            };
            this.saveProduct(prod);
          })
        )
      )
      .subscribe();
  }
  private uploadImageEditProduct(
    id: string,
    image: FileImage,
    product: Product
  ) {
    const ids = Math.random().toString(36).substring(2);
    this.filePath = `products_images/${image.name + ids}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((urlImage) => {
            this.downloadURL = urlImage;
            const prod = {
              name: product.name,
              category: product.category,
              provider: product.provider,
              existence: product.existence,
              price: product.price,
              photo: this.downloadURL,
            };
            this.editProductFragment(id, prod);
          })
        )
      )
      .subscribe();
  }
}

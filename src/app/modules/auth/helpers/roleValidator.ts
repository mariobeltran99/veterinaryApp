import { User } from 'firebase';

import { Users } from '../interfaces/user'
export class RoleValidator{
    isAdmin(user:Users):boolean{
        return user.role === 'Administrador';
    }
    isClient(user:Users):boolean{
        return user.role === 'Cliente';
    }
    isVeterinarian(user:Users):boolean{
        return user.role === 'Veterinario';
    }
    isGrocer(user:Users):boolean{
        return user.role === 'Bodeguero';
    }
}
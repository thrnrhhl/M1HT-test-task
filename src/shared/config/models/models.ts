
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    position: string;
    userTag: string;
    department: TypeDepartment;
    birthday: string;
    avatarUrl: string;
}

export type TypeDepartment = 'all' | 'design' | 'analytics' | 'management' | 'ios' | 'android' | 'qa' | 'back_office' | 'frontend' | 'hr' | 'pr' | 'backend' | 'support';
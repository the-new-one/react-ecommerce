export interface UserPersonalInformation {
    firstname: string;
    middlename: string;
    lastname: string;
    contactno: string;
    address: string;
}

export interface UserCredentialInformation {
    email: string;
    password: string;
}

export type UserCredentials = UserPersonalInformation & UserCredentialInformation;
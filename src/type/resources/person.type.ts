type Person = {
    id:string;
    name: string;
    role: string;
    university: string;
    avatar: string;
    connectionDate: string;
    isFollowed: boolean;
}

export type PersonPartial = Partial<Person>;
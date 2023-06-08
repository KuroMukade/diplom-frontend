import { Country, Currency } from 'shared/constants/common';

export interface Profile {
    username?: string;
    firstname?: string;
    lastname?: string;
    age?: string;
    country?: Country;
    currency?: Currency;
    city?: string;
    avatar?: string;
    totalTasks?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
}

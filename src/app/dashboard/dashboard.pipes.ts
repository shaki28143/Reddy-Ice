import { UserSearchPipe } from './user/pipe/user-search.pipe';
import { CustomerSearchPipe } from './customer/pipe/customer-search.pipe';
import { CustomerSortPipe } from './customer/pipe/customer-sort.pipe';
export const DASHBOARD_PIPE = [
    CustomerSearchPipe,
    UserSearchPipe,
    CustomerSortPipe
]


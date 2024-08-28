using { test3_withgit as my } from '../db/schema.cds';

@path: '/service/test3_withgit'
@requires: 'authenticated-user'
service test3_withgitSrv {
  @odata.draft.enabled
  entity Customers as projection on my.Customers;
  @odata.draft.enabled
  entity Products as projection on my.Products;
  @odata.draft.enabled
  entity Purchases as projection on my.Purchases;
  @odata.draft.enabled
  entity Redemptions as projection on my.Redemptions;
}
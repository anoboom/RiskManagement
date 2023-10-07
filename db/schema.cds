namespace RiskManagement;

using { BusinessPartnerA2X } from '../srv/external/BusinessPartnerA2X.cds';

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Risk : managed
{
    title : String(100) not null;
    prio : String(5);
    descr : String(100);
    impact : Integer;
    criticality : Integer;
    supplier : Association to one BusinessPartnerA2X.A_BusinessPartner;
    key miti : Association to one Mitigations;
    key ID : UUID
        @Core.Computed;
}

entity Mitigations : managed
{
    description : String(100) not null;
    owner : String(100);
    timeline : String(100);
    risk : Association to many Risk on risk.miti = $self;
    key ID : UUID
        @Core.Computed;
}

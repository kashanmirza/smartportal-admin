const datatablesHeader = {
  service: [
    {
      label: 'Service Code',
      field: 'serviceCode',
      sort: 'asc',
    },
    {
      label: 'Service Name',
      field: 'serviceNameEn',
      sort: 'asc',
    },
    {
      label: 'Organization Type',
      field: 'serviceTargetOrganizationType',
      sort: 'asc',
    },
    {
      label: 'Active',
      field: 'active',
      sort: 'asc',
    },
    {
      label: 'Category Name',
      field: 'serviceCategoryNameEn',
      sort: 'asc',
    },
    {
      label: 'Department Name',
      field: 'departmentNameEn',
      sort: 'asc',
    },
  ],
  serviceCategory: [
    {
      label: 'Service Category Name',
      field: 'serviceCategoryNameEn',
      sort: 'asc',
    },
    {
      label: 'Service Category Description',
      field: 'serviceCategoryDescEn',
      sort: 'asc',
    },
    {
      label: 'Parent Service Category Name',
      field: 'parentServiceCategoryNameEn',
      sort: 'asc',
    },
    {
      label: 'Active',
      field: 'active',
      sort: 'asc',
    },
  ],
  userManagement: [
    {
      label: 'User Name',
      field: 'userName',
      sort: 'asc',
    },
    {
      label: 'User Type',
      field: 'userType',
      sort: 'asc',
    },
    {
      label: 'First Name',
      field: 'userFirstName',
      sort: 'asc',
    },
    {
      label: 'Last Name',
      field: 'userLastName',
      sort: 'asc',
    },
    {
      label: 'Email Address',
      field: 'emailAddress',
      sort: 'asc',
    },
    {
      label: 'Last Login Date',
      field: 'lastLoginDate',
      sort: 'asc',
    },
    {
      label: 'Active',
      field: 'active',
      sort: 'asc',
    },
  ],

};

export default datatablesHeader;

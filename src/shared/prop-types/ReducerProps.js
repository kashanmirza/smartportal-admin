import PropTypes from 'prop-types';

const {
  string, shape,
} = PropTypes;

export const SidebarProps = shape({
  show: PropTypes.bool,
  collapse: PropTypes.bool,
});

export const ThemeProps = shape({
  className: string,
});

export const ServicesProps = shape({
  isLoading: PropTypes.bool,
  errMess: string,
  services: PropTypes.any,
});

export const ServicesCategoriesProps = shape({
  isLoading: PropTypes.bool,
  errMess: string,
  serviceCategories: PropTypes.any,
});

export const MatchProps = shape({
  id: PropTypes.string,
});

export const OrganizationFilterProps = shape({
  isLoading: PropTypes.bool,
  errMess: string,
  organization: PropTypes.any,
});

export const DepartmentsProps = shape({
  isLoading: PropTypes.bool,
  errMess: string,
  departments: PropTypes.any,
});

export const ServiceTypesProps = shape({
  isLoading: PropTypes.bool,
  errMess: string,
  serviceTypes: PropTypes.any,
});

export const ServiceSupportContractsProps = shape({
  isLoading: PropTypes.bool,
  errMess: string,
  serviceSupportContracts: PropTypes.any,
});


export const UsersByDepartmentIDProps = shape({
  isLoading: PropTypes.bool,
  errMess: string,
  users: PropTypes.any,
});

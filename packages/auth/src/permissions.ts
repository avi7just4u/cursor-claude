export interface Permission {
  resource: string;
  action: string;
}

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export const checkPermission = (
  userPermissions: Permission[],
  requiredPermission: Permission
): boolean => {
  return userPermissions.some(
    (permission) =>
      permission.resource === requiredPermission.resource &&
      permission.action === requiredPermission.action
  );
};

export const hasRole = (userRoles: string[], requiredRole: string): boolean => {
  return userRoles.includes(requiredRole);
}; 
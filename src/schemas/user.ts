export type TUserFromServer = {
  id_user: number;
  nickname: string;
  email: string;
  password?: string;
};

export type TUser = {
  id: number;
  nickname: string;
  email: string;
  password?: string;
};

export type TUserToEditAuthData = {
  email?: TUser["email"];
  password: TUser["password"];
  newPassword?: TUser["password"];
};

export type TUserToEdit = Pick<TUser, "nickname">;

export type TUserToRegister = Pick<TUser, "email" | "nickname" | "password">;
export type TUserToLogin = Pick<TUser, "email" | "password">;

export type TRegistrationAndLoginResponse = TUserFromServer & { token: string };

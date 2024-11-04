function email(email: string): boolean {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@isptec\.co\.ao$/;
  return emailRegex.test(email.toLowerCase());
}
export const validator = {
  email,
};

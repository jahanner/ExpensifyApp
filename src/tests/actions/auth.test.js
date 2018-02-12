import { login, logout } from "../../actions/auth.js";

test("should generate login action object", () => {
  const uid = "laksjd";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("should generate logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});

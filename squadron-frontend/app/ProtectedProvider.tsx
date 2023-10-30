import React from "react";
import { AuthProvider, useAuth } from "@/app/authContext";
import SignUp from "@/ui/signup";

interface IProps {
  children?: React.ReactNode;
}

const AuthProtected: React.FC<IProps> = (props) => {
  const auth = useAuth();

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  if (auth.user) {
    return <>{props.children}</>;
  } else {
    if (typeof window !== "undefined") {
      alert("Please login to access this page");
    }
  }

  return <SignUp login={true} />;
};

const ProtectedProvider: React.FC<IProps> = ({ children }) => {
  return (
    <AuthProvider>
      <AuthProtected>{children}</AuthProtected>
    </AuthProvider>
  );
};

export default ProtectedProvider;

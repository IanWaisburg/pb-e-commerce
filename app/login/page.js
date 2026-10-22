import { Suspense } from "react";
import LoginForm from "./LoginForm";
import styles from "./login.module.css";

export const metadata = {
  title: "Iniciar sesión | Roller",
};

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}

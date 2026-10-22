import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fija la raíz del proyecto para que Turbopack no tome una carpeta superior
  // cuando hay otro lockfile (por ejemplo, en la carpeta de usuario).
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;

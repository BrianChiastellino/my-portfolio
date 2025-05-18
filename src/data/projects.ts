import type { Project } from "../types/project";


export const projects: Project[] = [
    {
        id: "1",
        title: "Broker criptomonedas",
        description: "Plataforma de trading y gestión de usuarios desarrollada con Angular. Permite registrarse, gestionar billeteras virtuales (saldo, retiros, compra/venta de criptos) y consultar precios en tiempo real gracias a la API de CoinGecko. Incluye un panel de administración con control total de usuarios, movimientos y estado del sistema.",
        stackInfo: 'FullStack',
        stack: ["Angular", "Node.js", "ExpresJS", "MySQL", "TypeScript"],
        image: "/assets/project-icons/crypto.png",
        githubUrl: "https://github.com/BrianChiastellino/crypto-trading-user-management",
    },
    {
        id: "2",
        title: "API RESTful - Gestión Académica",
        description:
            "API RESTful para gestionar estudiantes, profesores y cursos con Node.js, Express y MySQL. Incluye operaciones CRUD, relaciones muchos a muchos (estudiantes_cursos), código modular con patrones Singleton y MVC, y manejo de CORS para entornos seguros y escalables.",
        stackInfo: 'Backend',
        stack: ["Node.js", "Express", "JavaScript", "MySQL"],
        image: "/assets/project-icons/cloud-api.png", // reemplazalo por tu SVG o ícono
        githubUrl: "https://github.com/BrianChiastellino/nodejs-express-api-rest"
    },
    {
        id: "3",
        title: "User Management",
        description:
            "Aplicación para gestión de usuarios con autenticación segura mediante JWT en cookies. Incluye CRUD de usuarios, rutas protegidas con roles, formularios reactivos en Angular y organización profesional del backend con MVC y Singleton. Seguridad reforzada y manejo del estado con RxJS para una experiencia fluida y moderna.",
        stackInfo: 'Fullstack',
        stack: ["Angular", "Node.js", "Express", "MySQL"],
        image: "/assets/project-icons/user-managment.png",
        githubUrl: "https://github.com/BrianChiastellino/user-management-fullstack"
    },
    {
        id: "4",
        title: "Portafolio",
        description:
          "Portfolio profesional desarrollado con Astro y TailwindCSS, pensado como una SPA fluida y ligera. Incluye navegación con scroll suave, diseño responsive, modo oscuro, animaciones suaves y componentes reutilizables.",
          stackInfo: "Frontend",
        stack: ["Astro","TypeScript", "TailwindCSS"],
        image: "/assets/project-icons/portfolio.png", 
        githubUrl: "https://github.com/BrianChiastellino/my-portfolio" 
      }
      



]
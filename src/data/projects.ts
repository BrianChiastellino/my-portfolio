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
        title: "User Management",
        description:
            "Aplicación para gestión de usuarios con autenticación segura mediante JWT en cookies. Incluye CRUD de usuarios, rutas protegidas con roles, formularios reactivos en Angular y organización profesional del backend con MVC y Singleton. Seguridad reforzada y manejo del estado con RxJS para una experiencia fluida y moderna.",
        stackInfo: 'Fullstack',
        stack: ["Angular", "Node.js", "ExpresJS", "MySQL"],
        image: "/assets/project-icons/user-managment.png",
        githubUrl: "https://github.com/BrianChiastellino/user-management-fullstack"
    },
    {
        id: "3",
        title: "API RESTful - Gestión Académica",
        description:
            "API RESTful para gestionar estudiantes, profesores y cursos con Node.js, Express y MySQL. Incluye operaciones CRUD, relaciones muchos a muchos (estudiantes_cursos), código modular con patrones Singleton y MVC, y manejo de CORS para entornos seguros y escalables.",
        stackInfo: 'Backend',
        stack: ["Node.js", "ExpresJS", "JavaScript", "MySQL"],
        image: "/assets/project-icons/cloud-api.png", // reemplazalo por tu SVG o ícono
        githubUrl: "https://github.com/BrianChiastellino/nodejs-express-api-rest"
    },
    {
        id: "4",
        title: "GAME - Delivery Bros",
        description: "Videojuego desarrollado con Java usando el framework libGDX, donde el objetivo es entregar un pedido en el menor tiempo posible esquivando obstáculos como vehículos, postes y agujeros. Al llegar a destino, se muestra el tiempo final y se guarda el resultado en un scoreboard. Se utilizó Gradle para la gestión de dependencias y Jackson para el guardado de puntuaciones.",
        stackInfo: 'Fulstack',
        stack: ["Java", "LibGDX", "Gradle"],
        image: "/assets/project-icons/delivery.png", // reemplazalo por tu SVG o ícono
        githubUrl: "https://github.com/BrianChiastellino/game-delivery-bros"
    },
    {
        id: "5",
        title: "Portafolio",
        description:
          "Portfolio profesional desarrollado con Astro y TailwindCSS, pensado como una SPA fluida y ligera. Incluye navegación con scroll suave, diseño responsive, modo oscuro, animaciones suaves y componentes reutilizables.",
          stackInfo: "Frontend",
        stack: ["Astro","TypeScript", "TailwindCSS"],
        image: "/assets/project-icons/portfolio.png", 
        githubUrl: "https://github.com/BrianChiastellino/my-portfolio" 
      }
]
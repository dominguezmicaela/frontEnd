# Huellitas - Pet Shop Online 

**De Front-End a Full Stack**

Bienvenidos a **Huellitas**! Lo que comenzó como un proyecto de curso se transformó en una aplicación web completa. En este e-commerce dinámico cuenta con una arquitectura moderna donde el Front-End consume datos de una **API propia** conectada a una base de datos relacional.

**[Ver Demo en Vivo](https://dominguezmicaela.github.io/petshopHuellitas/)**

---

##  Arquitectura y Tecnologías

El proyecto ha sido reestructurado para funcionar con una arquitectura de tres capas:

### 1. Backend
* **Framework:** desarrollado con **.NET 9 /C#**.
* **Arquitectura:** controladores y servicios para la gestión de productos
* **Hosting:** desplegado en **Render**.
* **Patrones de diseño:**
  * **Repository Pattern:** para abstraer y desacoplar el acceso a los datos
  * **DTO (Data Transfer Object):** aplicado para que haya una transferencia segura de datos entre capas, evitando exponer las endidades de la base de datos de forma directa
  * **Inyeccion de dependenciasDI(Dependency Injection):** para mejorar la modularidad y testabilidad
* **Estructura:** separacion de responsabilidades
  * Huellitas.API: controladores y endpoints
  * Huellitas.Service: logica y validaciones
  * Huellittas.Data: contexto de DB y repositorios
  * Huellitas.Core: entidades e interfaces
    
* * **ORM:** **Entity Framework Core** con enfoque *Code First*.
    
### 2. Base de Datos
* **Motor:** **PostgreSQL**.
* **Cloud:** alojada en **Neon**
* **Modelado:** diseño relacional normalizado
* ## Estructura de base de datos
![Diagrama de Base de Datos](./docs/diagrams/huellitasdb.png)

### 3. Frontend
> ⚠️ **Estado del Frontend:** ahora la interfaz de usuario se encuentra en una version estática (MVP). El foco del desarrollo actual está puesto en el backend. La integración completa para la visualizacion dinamica de productos se realizara en la siguiente etapa.
* **Tecnologías:** HTML5, CSS3 (Flexbox/Grid) y **JavaScript **
* **Consumo de API:** Integración mediante `fetch` asíncrono a la API en la nube
* **Persistencia Local:** Uso de **LocalStorage** para la gestión del carrito de compras
* **Hosting:** Desplegado en **GitHub Pages**.

---

## Funcionalidades Destacadas

* **Catálogo Dinámico:** Los productos se cargan en tiempo real desde la base de datos
* **Carrito de Compras:** se puede agregar, eliminar o vaciar el carrito
* **Diseño Responsive:**  apto para celular, tablet y escritorio
* **Interacción:** notificaciones visuales con **SweetAlert2** y formularios conectados con **Formspree**.
* **Documentación API:** endpoints documentados y probados mediante **Swagger UI**
---
## Roadmap (integracion de data science y IA)
* **[En progreso]** (smart data seeding ) desarrollo de un generador de datos sinteticos con la finalidad de simular patrones de comportamiento de conpra. Por ejemplo, perfiles de usuarios, clusters de productos etc) en lugar de usar datos aleatorios puros.
* **[Futuro]** motor de recomendaciones: implementacion de un modelo de Machine Learning, con reglas de asociacion previas para poder sugerir productos complementarios (Las personas que compraron X producto tambien llevaron Y producto)
---

##  Metodología de Desarrollo

Para este proyecto aplique una metodología de desarrollo ágil y moderna:
* **AI-Assisted Development:** Use herramientas de **Inteligencia Artificial** para la optimización de algoritmos, corrección de errores en tiempo real y sugerencias de mejores prácticas en la arquitectura del Backend y Frontend.
* **Control de Versiones:** Git y GitHub.Implementación de flujo de trabajo basado en **Feature Branches** (ramas secundarias) y adopción de **Conventional Commits** para un historial limpio
* **Documentación:** Mantenimiento activo de documentación técnica.
---
##  Stack 

* ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)
* ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
* ![Entity Framework](https://img.shields.io/badge/Entity%20Framework-512BD4?style=for-the-badge&logo=.net&logoColor=white)
* ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black)



*Proyecto realizado por Micaela Belen Dominguez. *

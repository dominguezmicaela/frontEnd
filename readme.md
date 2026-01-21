# Huellitas - Pet Shop Online 

**De Front-End a Full Stack**

Bienvenidos a **Huellitas**! Lo que comenzó como un proyecto de curso se transformó en una aplicación web robusta y escalable. Este e-commerce cuenta con una arquitectura moderna donde el Front-End ha evolucionado hacia una **Single Page Application (SPA)** en React que consume datos de una **API propia** conectada a una base de datos relacional.

**[Ver Demo en Vivo](https://dominguezmicaela.github.io/petshopHuellitas/)**

---

## Arquitectura y Tecnologías

El proyecto ha sido reestructurado íntegramente para funcionar bajo un esquema de tres capas:

### 1. Backend
* **Framework:** desarrollado con **.NET 9 / C#**.
* **Arquitectura:** basada en controladores y servicios con clara separación de responsabilidades.
* **Hosting:** desplegado en **Render**.
* **Patrones de diseño:**
  * **Repository Pattern:** para abstraer y desacoplar el acceso a los datos.
  * **DTO (Data Transfer Object):** aplicado para una transferencia segura de datos entre capas.
  * **Inyección de Dependencias (DI):** para mejorar la modularidad y testabilidad.
* **Estructura de Solución:**
  * `Huellitas.API`: controladores y endpoints.
  * `Huellitas.Service`: lógica de negocio y validaciones.
  * `Huellitas.Data`: contexto de base de datos y repositorios.
  * `Huellitas.Core`: entidades fundamentales e interfaces.
* **ORM:** **Entity Framework Core** con enfoque *Code First*.

### 2. Base de Datos
* **Motor:** **PostgreSQL**.
* **Cloud:** alojada en **Neon**.
* **Modelado:** diseño relacional normalizado para asegurar la consistencia.

### 3. Frontend (Migración a React)
> ⚠️ **Estado del Frontend:** La interfaz ha sido migrada de HTML a **React**, mejorando la reactividad y la experiencia de usuario. Actualmente se encuentra en fase de integración dinámica con el Backend.
* **Tecnologías:** React, Vite, JavaScript (ES6+), CSS3 (Flexbox/Grid).
* **Navegación:** Implementación de **React Router Dom** para la gestión de rutas y paneles administrativos.
* **Persistencia Local:** Uso de **LocalStorage** para la gestión del carrito de compras.
* **Hosting:** Desplegado en **GitHub Pages**.

---

## Funcionalidades Destacadas

* **Dashboard Administrativo:** Panel exclusivo con acceso a métricas clave y gestión de usuarios.
* **Catálogo Dinámico:** Los productos se cargan en tiempo real consumiendo los endpoints de la API.
* **Carrito de Compras:** sistema persistente para agregar, eliminar y gestionar pedidos.
* **Diseño Responsive:** interfaz optimizada para celulares, tablets y computadoras de escritorio.
* **Documentación API:** endpoints totalmente documentados y testeables mediante **Swagger UI**.

---

## Roadmap (Data Science, IA & CRM)

* **[Completado] Smart Data Pipeline:** Desarrollo de scripts en Python para la limpieza y carga inteligente de productos, categorizando automáticamente los ítems.
* **[En Progreso] Dashboard Dinámico para CRM:** Visualización de tendencias de compra y gestión analítica de los 580 usuarios dentro del panel de administración.
* **[Futuro] Motor de Recomendaciones:** Implementación de lógica de **Machine Learning** para sugerir productos complementarios basados en el historial del usuario.

---

## Metodología de Desarrollo

* **AI-Assisted Development:** Uso de herramientas de **IA** para la optimización de algoritmos, refactorización de código.
* **Control de Versiones:** Flujo de trabajo basado en **Feature Branches** y adopción de **Conventional Commits** para un historial limpio y profesional.
* **Documentación:** Mantenimiento constante de la documentación técnica del proyecto.

---

## Stack 

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)
* ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black)

## Aviso Legal
Este proyecto fue desarrollado exclusivamente con **fines educativos**. 
* **Imágenes y Datos:** Se han utilizado herramientas de automatización para datasets con fines de demostración técnica. Los derechos pertenecen a sus respectivos dueños.
* **Propósito:** Demostración de habilidades en arquitectura de software, gestión de bases de datos y desarrollo Full Stack.

*Proyecto realizado por Micaela Belen Dominguez.*

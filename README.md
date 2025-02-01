# 📝 Notesy - Gestor de Notas

**Notesy** es una aplicación web para crear, editar y gestionar notas de manera sencilla. Desarrollada con **Next.js**, **Firebase** y **TypeScript**, permite a los usuarios guardar notas en tiempo real, editarlas y eliminarlas fácilmente.

---

## 🚀 Características

- **Crear notas**: Añade nuevas notas con un título y contenido.
- **Editar notas**: Modifica el contenido de las notas existentes.
- **Eliminar notas**: Elimina notas que ya no necesites.
- **Almacenamiento en Firebase**: Las notas se guardan en **Firestore** de Firebase.
- **Interfaz intuitiva**: Diseño limpio y fácil de usar.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - [Next.js](https://nextjs.org/) - Framework de React para renderizado del lado del servidor.
  - [TypeScript](https://www.typescriptlang.org/) - Lenguaje tipado para mayor seguridad en el código.
  - [Tailwind CSS](https://tailwindcss.com/) - Framework de estilos para diseño rápido y responsive.

- **Backend**:
  - [Firebase](https://firebase.google.com/) - Plataforma de desarrollo de aplicaciones móviles y web.
    - **Firestore**: Base de datos NoSQL para almacenar las notas.
    - **Authentication** (si lo implementas): Para autenticación de usuarios.

- **Herramientas**:
  - [React](https://reactjs.org/) - Biblioteca para construir interfaces de usuario.
  - [Vercel](https://vercel.com/) - Plataforma para despliegue de aplicaciones.

---

## 📂 Estructura del Proyecto

```
.next
node_modules
public
├── Notesy.png
src
├── app
│   ├── api
│   │   ├── data
│   │   │   ├── route.js
│   ├── components
│   │   ├── Button.tsx
│   │   ├── ErrorState.tsx
│   │   ├── InputField.tsx
│   │   ├── Loading.tsx
│   │   ├── MainLayout.tsx
│   │   ├── NoteCard.tsx
│   │   ├── NoteForm.tsx
│   │   ├── SearchButton.tsx
│   ├── lib
│   │   ├── db.ts
│   │   ├── firebase.ts
│   ├── note
│   │   ├── [id]
│   │   │   ├── page.tsx
│   │   ├── edit
│   │   │   ├── [id]
│   │   │   │   ├── page.tsx
│   │   ├── new
│   │   │   ├── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
.gitignore
eslint.config.mjs
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
```

---

## 🛠️ Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/J0J1-ALT/Notesy.git
   cd notesy
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura Firebase**:
   - Crea un proyecto en Firebase Console.
   - Obtén las credenciales de Firebase y configura el archivo `.env.local`:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-dominio.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=tu-app-id
   ```
   ⚠ **IMPORTANTE**: Debes configurar tu propia API Key de Firebase para poder utilizar Notesy correctamente.

4. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abre la aplicación**:
   - Visita `http://localhost:3000` en tu navegador.

---

## 🖥️ Uso

### Crear una nueva nota:
- Haz clic en el botón "Nueva Nota" o visita `http://localhost:3000/note/new`.
- Completa el formulario y guarda la nota.

### Editar una nota:
- Desde la lista de notas, haz clic en una nota para editarla.
- Modifica el contenido y guarda los cambios.

### Eliminar una nota:
- En la página de edición de una nota, haz clic en "Eliminar".

---

## 🙌 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una rama con tu nueva funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz **commit**:
   ```bash
   git commit -m 'Añade nueva funcionalidad'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request** en este repositorio.

---

## 📧 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **GitHub**: [@J0J1-ALT](https://github.com/J0J1-ALT)

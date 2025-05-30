<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-gray-400 font-[Roboto]">
    <!-- NAVIGATION -->
    <div class="justify-between flex px-4 py-3 bg-gray-700">
      <nav class="flex gap-10 ml-5 text-white items-center">
        <a href="#"><img src="asset/image/Logo.png" alt="Logo" class="w-10" /></a>
        <a href="views/Indeks.html">Home</a>
        <a href="views/Projects.html">Projects</a>
      </nav>
      <a href="views/Contactme.html" class="bg-black rounded-lg px-3 py-1 mr-9 text-white">Contact Me</a>
    </div>

    <!-- HERO SECTION -->
    <section class="px-4 py-10">
      <div class="flex bg-white gap-10 px-8 py-12 shadow-2xl m-2 flex-wrap justify-between">
        <div class="text-justify max-w-xl">
          <h1 class="font-bold py-2 text-5xl">HI, I'm Fajar Broww</h1>
          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae voluptatibus vero quis consequuntur quibusdam dicta accusamus omnis dolore perferendis praesentium, ex consequatur delectus nesciunt quaerat ipsam eveniet? Nostrum, nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod reiciendis consequatur. Modi dolorem, illum aliquam vel dolor, vero perspiciatis ex pariatur ducimus neque commodi magni facere odio, itaque dolore?
          </p>

          <div class="mt-10 flex items-center gap-6">
            <a href="views/Contactme.html" class="bg-black rounded-lg px-4 py-2 text-white">Contact Me</a>
            <span class="flex items-center gap-2">
              Download CV 
              <img src="asset/image/fajar.JPG" alt="Fajar CV" class="w-10 h-10 rounded-full" />
            </span>
          </div>

          <div class="mt-10 flex gap-5">
            <!-- Social Media Icons (You can update the href links) -->
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 24 24"><path d="M2.367 3l7.096 10.141L2.74 21h2.641l5.264-6.17L14.96 21h6.911L14.45 10.375 20.74 3h-2.6L13.27 8.688 9.3 3H2.367z" /></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z"/></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          </div>
        </div>

        <div class="text-center bg-white shadow-2xl p-4">
          <img src="asset/image/fajar.JPG" alt="Foto Fajar" class="w-64 h-auto rounded-lg mx-auto" />
          <p class="text-2xl font-bold mt-4">FAJAR HERMAWAN</p>
          <p class="text-sm text-gray-700">Fullstack Developer</p>
        </div>
      </div>
    </section>
  </body>
</html>

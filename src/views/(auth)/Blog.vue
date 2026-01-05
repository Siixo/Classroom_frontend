<template>
  <div class="flex flex-col gap-8 max-w-2xl mx-auto py-12 px-4">
    <article
      class="flex bg-gray-100 transition hover:shadow-xl rounded-lg overflow-hidden p-4"
    >
      <div class="rotate-180 p-2 [writing-mode:vertical-lr]">
        <time
          datetime="2025-12-01"
          class="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
        >
          <span>2025</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>1 Déc</span>
        </time>
      </div>
      <div class="hidden sm:block sm:basis-56">
        <img
          alt="City skyline at sunset"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1160"
          class="aspect-square h-full w-full object-cover"
        />
      </div>
      <div class="flex flex-1 flex-col justify-between">
        <div
          class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
        >
          <a href="#">
            <h3 class="font-bold text-gray-900 uppercase">
              Explorer la ville : aventures urbaines
            </h3>
          </a>
          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            Découvrez les trésors cachés de la ville, des cafés chaleureux aux
            fresques de street art colorées. L'exploration urbaine offre
            d'innombrables opportunités d'aventure et de créativité. Que vous
            soyez habitant ou visiteur, il y a toujours quelque chose de nouveau
            à découvrir à chaque coin de rue.
          </p>
        </div>
        <div class="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            class="block bg-accent px-5 py-3 text-center text-xs font-bold text-white uppercase transition hover:bg-yellow-400 rounded-md"
          >
            Lire le Blog
          </a>
        </div>
      </div>
    </article>
    <article
      class="flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden p-4"
    >
      <div class="rotate-180 p-2 [writing-mode:vertical-lr]">
        <time
          datetime="2026-01-01"
          class="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
        >
          <span>2026</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>1 Jan</span>
        </time>
      </div>
      <div class="hidden sm:block sm:basis-56">
        <img
          alt="Mountain landscape"
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=1160"
          class="aspect-square h-full w-full object-cover"
        />
      </div>
      <div class="flex flex-1 flex-col justify-between">
        <div
          class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
        >
          <a href="#">
            <h3 class="font-bold text-gray-900 uppercase">
              Randonnée en montagne : la beauté de la nature
            </h3>
          </a>
          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            Ressentez la tranquillité des montagnes et l'excitation d'atteindre
            de nouveaux sommets. La randonnée n'est pas seulement une activité
            physique, c'est un voyage qui vous relie à la nature et à vous-même.
            Préparez votre sac et partez pour une aventure inoubliable.
          </p>
        </div>
        <div class="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            class="block bg-accent px-5 py-3 text-center text-xs font-bold text-white uppercase transition hover:bg-yellow-400 rounded-md"
          >
            Lire le Blog
          </a>
        </div>
      </div>
    </article>
    <article
      class="flex bg-gray-100 transition hover:shadow-xl rounded-lg overflow-hidden p-4"
    >
      <div class="rotate-180 p-2 [writing-mode:vertical-lr]">
        <time
          datetime="2026-02-14"
          class="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
        >
          <span>2026</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>14 Fév</span>
        </time>
      </div>
      <div class="hidden sm:block sm:basis-56">
        <img
          alt="Cozy home workspace"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1160"
          class="aspect-square h-full w-full object-cover"
        />
      </div>
      <div class="flex flex-1 flex-col justify-between">
        <div
          class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
        >
          <a href="#">
            <h3 class="font-bold text-gray-900 uppercase">
              Productivité à la maison : astuces & conseils
            </h3>
          </a>
          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            Travailler à la maison peut être à la fois gratifiant et difficile.
            Découvrez des stratégies efficaces pour rester concentré, organisé
            et motivé dans votre espace de travail à domicile. Créez une routine
            adaptée à vos besoins et profitez pleinement de votre temps chez
            vous.
          </p>
        </div>
        <div class="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            class="block bg-accent px-5 py-3 text-center text-xs font-bold text-white uppercase transition hover:bg-yellow-400 rounded-md"
          >
            Lire le Blog
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>

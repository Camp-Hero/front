<template>
  <div class="columns scrollable-hidden">
    <div class="column scrollable">
      <h2 class="title has-text-grey">Campings</h2>
    </div>
    <div class="column scrollable border">
      <h2 class="title has-text-grey box fixed">Évenements</h2>
      <div
        v-for="event in campingEvents"
        :key="event.id"
        class="card event-card mt-6"
      >
        <header class="card-header">
          <p class="card-header-title">
            {{ event.title }}
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span>{{ event.date }}</span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            {{ event.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="column scrollable">
      <h2 class="title has-text-grey box fixed">Commentaires</h2>
      <div class="is-vertical-center has-text-centered">
        <p>Cliquez sur un évenement pour afficher ses commentaires</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      camping: {
        title: 'Camping des flots bleus'
      },
      campingEvents: [
        {
          id: 0,
          title: 'Soirée avec des meufs',
          content:
            "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
          date: '10 avril 2020'
        },
        {
          id: 1,
          title: 'Soirée avec des meufs',
          content:
            "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
          date: '10 avril 2020'
        },
        {
          id: 2,
          title: 'Soirée avec des meufs',
          content:
            "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
          date: '10 avril 2020'
        },
        {
          id: 3,
          title: 'Soirée avec des meufs',
          content:
            "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
          date: '10 avril 2020'
        },
        {
          id: 4,
          title: 'Soirée avec des meufs',
          content:
            "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
          date: '10 avril 2020'
        },
        {
          id: 5,
          title: 'Soirée avec des meufs',
          content:
            "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
          date: '10 avril 2020'
        },
        {
          id: 6,
          title: 'Soirée avec des meufs',
          content:
            "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
          date: '10 avril 2020'
        },
        {
          id: 7,
          title: 'Soirée avec des meufs',
          content:
            "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
          date: '10 avril 2020'
        }
      ],
      comments: [
        {
          id: 1,
          title: 'Lalala',
          author: 'Jeanbon',
          content: 'Je serais présent avec mes 5 femmes et mes 24 gosses !'
        },
        {
          id: 3,
          title: 'Lalala',
          author: 'Jeanbon',
          content: 'Je serais présent avec mes 5 femmes et mes 24 gosses !'
        },
        {
          id: 4,
          title: 'Lalala',
          author: 'Jeanbon',
          content: 'Je serais présent avec mes 5 femmes et mes 24 gosses !'
        },
        {
          id: 5,
          title: 'Lalala',
          author: 'Jeanbon',
          content: 'Je serais présent avec mes 5 femmes et mes 24 gosses !'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// .yes {
//   border: 1px crimson solid;
// }
.scrollable {
  overflow: scroll;
  height: 100vh;
}
.scrollable-hidden {
  overflow: hidden;
}
.border {
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
}
.fixed {
  position: fixed;
  z-index: 10;
  top: 10px;
  width: calc(31% + 3px);
  overflow: hidden;
}
.card {
  cursor: pointer;
}
.card:hover {
  opacity: 0.7;
}
.is-vertical-center {
  display: flex;
  align-items: center;
  height: 95vh;
}
// .column .event-card:nth-child(1) {
//   margin-top: 140px;
// }
</style>

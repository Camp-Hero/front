<template>
  <div class="columns scrollable-hidden">
    <div class="column scrollable">
      <h2 class="title has-text-grey box fixed">Campings</h2>
      <div class="mt-24">
        <div
          v-for="camping in campings"
          :key="camping.id"
          @click="openEvents(camping.id)"
          class="card event-card mt-6"
        >
          <header class="card-header">
            <p class="card-header-title">
              {{ camping.name }}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p class="has-text-weight-bold	">
                Adresse :&nbsp;
                <span class="has-text-weight-normal	">{{
                  camping.address
                }}</span>
              </p>
              <p class="has-text-weight-bold	">
                Téléphone :&nbsp;
                <span class="has-text-weight-normal	">{{ camping.phone }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column scrollable border">
      <h2 class="title has-text-grey box fixed">Évenements</h2>
      <div v-if="isEventsOpened" class="mt-24">
        <div
          v-for="event in campingEvents"
          :key="event.id"
          @click="openComments(event.id)"
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
      <div v-else class="is-vertical-center has-text-centered is-size-4">
        <p>Cliquez sur un camping pour afficher ses évenements</p>
      </div>
    </div>
    <div class="column scrollable">
      <h2 class="title has-text-grey box fixed">Commentaires</h2>
      <div v-if="isCommentsOpened" class="mt-24">
        <div
          v-for="comment in eventsComments"
          :key="comment.id"
          class="card mt-6"
        >
          <header class="card-header">
            <a href="#" class="card-header-icon" aria-label="more options">
              <span>{{ comment.author }}</span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <span v-if="eventsComments">
                {{ comment.content }}
              </span>
              <form v-else>
                <b-field label="Commentaire" label-position="on-border">
                  <b-input
                    v-model="comments.content"
                    type="textarea"
                    maxlength="220"
                  ></b-input>
                </b-field>
                <b-button
                  @click="sendComment"
                  expanded
                  class="is-primary"
                  type="submit"
                  >Envoyer</b-button
                >
              </form>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="is-vertical-center has-text-centered is-size-4">
        <p>Cliquez sur un évenement pour afficher ses commentaires</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCommentsOpened: false,
      isEventsOpened: false,
      eventId: null,
      campingId: null,
      comments: {
        content: ''
      },
      campings: [
        {
          id: 0,
          name: 'Camping des flots bleus',
          address: 'Avenue de Biscarrosse, 33115 Le Pyla sur Mer',
          phone: '05 56 22 72 17',
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
              date: '10 avril 2020',
              comments: [
                {
                  id: 0,
                  author: 'Jeanbon',
                  content:
                    'Je serais présent avec mes 5 femmes et mes 24 gosses !'
                },
                {
                  id: 1,
                  author: 'Jeanbon',
                  content:
                    'Je serais présent avec mes 5 femmes et mes 24 gosses !'
                },
                {
                  id: 2,
                  author: 'Jeanbon',
                  content:
                    'Je serais présent avec mes 5 femmes et mes 24 gosses !'
                },
                {
                  id: 3,
                  author: 'Jeanbon',
                  content:
                    'Je serais présent avec mes 5 femmes et mes 24 gosses !'
                }
              ]
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
              date: '10 avril 2020',
              comments: [
                {
                  id: 0,
                  author: 'Jeanbon',
                  content:
                    'Je serais présent avec mes 5 femmes et mes 24 gosses !'
                },
                {
                  id: 1,
                  author: 'Jeanbon',
                  content:
                    'Je serais présent avec mes 5 femmes et mes 24 gosses !'
                }
              ]
            },
            {
              id: 4,
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
              id: 4,
              title: 'Soirée avec des meufs',
              content:
                "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
              date: '10 avril 2020'
            }
          ]
        },
        {
          id: 1,
          name: 'Yes super camping',
          campingEvents: [
            {
              id: 0,
              title: 'Soirée avec des mecs',
              content:
                "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
              date: '10 avril 2020'
            },
            {
              id: 1,
              title: 'Soirée avec des mecs',
              content:
                "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
              date: '10 avril 2020',
              comments: [
                {
                  id: 0,
                  author: 'Jeanbon',
                  content: 'Je serais pas là présent'
                },
                {
                  id: 1,
                  author: 'Jeanbon',
                  content: 'Je serais pas là présent'
                }
              ]
            },
            {
              id: 2,
              title: 'Soirée avec des mecs',
              content:
                "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
              date: '10 avril 2020'
            },
            {
              id: 3,
              title: 'Soirée avec des meufs',
              content:
                "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
              date: '10 avril 2020',
              comments: [
                {
                  id: 0,
                  author: 'Jeanbon',
                  content:
                    'Je serais présent avec mes 5 femmes et mes 24 gosses !'
                },
                {
                  id: 1,
                  author: 'Jeanbon',
                  content:
                    'Je serais présent avec mes 5 femmes et mes 24 gosses !'
                }
              ]
            },
            {
              id: 4,
              title: 'Soirée avec des meufs',
              content:
                "Bonjour, j'organise une soirée dans mon camping-car, ramenez de la meuf !",
              date: '10 avril 2020'
            }
          ]
        }
      ]
    }
  },
  computed: {
    campingEvents() {
      return this.campings[this.campingId].campingEvents
    },
    eventsComments() {
      return this.campings[this.campingId].campingEvents[this.eventId].comments
    }
  },
  methods: {
    openEvents(campingId) {
      this.isEventsOpened = true
      this.campingId = campingId
      if (this.eventId !== null) {
        this.isCommentsOpened = false
        this.eventId = null
      }
    },
    openComments(eventId) {
      this.isCommentsOpened = true
      this.eventId = eventId
      console.log(this.eventsComments)
    },
    sendComment(eventId) {
      console.log(this.comment.content)
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
.event-card {
  cursor: pointer;
}
.event-card:hover {
  background: rgba(255, 255, 255, 0.7);
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

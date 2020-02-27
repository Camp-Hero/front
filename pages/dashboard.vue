<template>
  <div class="columns scrollable-hidden">
    <div class="column scrollable">
      <h2 class="title has-text-grey box fixed">Campings</h2>
      <div v-if="campings" class="mt-24">
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
              <p class="has-text-weight-bold">
                Adresse :&nbsp;
                <span class="has-text-weight-normal">{{
                  camping.address
                }}</span>
              </p>
              <p class="has-text-weight-bold">
                Téléphone :&nbsp;
                <span class="has-text-weight-normal">{{ camping.phone }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="has-text-centered is-size-4 mt-42">
          Il n'y a pas encore de camping
        </p>
        <div class="card mt-24">
          <header class="card-header">
            <p class="card-header-title">Créer un camping</p>
          </header>
          <div class="card-content">
            <form>
              <b-field label="Titre" label-position="on-border">
                <b-input
                  v-model="campingsForm.name"
                  type="text"
                  maxlength="30"
                ></b-input>
              </b-field>

              <b-field label="Contenu" label-position="on-border">
                <b-input
                  v-model="campingsForm.address"
                  type="textarea"
                  maxlength="220"
                ></b-input>
              </b-field>

              <b-field label="Contenu" label-position="on-border">
                <b-input v-model="campingsForm.phone" type="phone"></b-input>
              </b-field>
              <b-button
                @click="createCamping"
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
    <div class="column scrollable border">
      <h2 class="title has-text-grey box fixed">Évenements</h2>
      <div v-if="isEventsOpened" class="mt-24">
        <div v-if="campingEvents">
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
        <div v-else>
          <p class="has-text-centered is-size-4 mt-42">
            Ce camping n'a pas encore d'évenement
          </p>
          <div class="card mt-24">
            <header class="card-header">
              <p class="card-header-title">Créer un évenement</p>
            </header>
            <div class="card-content">
              <form>
                <b-field label="Titre" label-position="on-border">
                  <b-input
                    v-model="events.title"
                    type="text"
                    maxlength="30"
                  ></b-input>
                </b-field>

                <b-field label="Contenu" label-position="on-border">
                  <b-input
                    v-model="events.content"
                    type="textarea"
                    maxlength="220"
                  ></b-input>
                </b-field>
                <b-button
                  @click="createEvent"
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
        <p>Cliquez sur un camping pour afficher ses évenements</p>
      </div>
    </div>
    <div class="column scrollable">
      <h2 class="title has-text-grey box fixed">Commentaires</h2>
      <div v-if="isCommentsOpened" class="mt-24">
        <div v-if="eventsComments">
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
                <span>
                  {{ comment.content }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="has-text-centered is-size-4 mt-42">
            Ce camping n'a pas encore d'évenement
          </p>
          <div class="card mt-24">
            <header class="card-header">
              <p class="card-header-title">Laisser un commentaire</p>
            </header>
            <div class="card-content content">
              <form>
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
      events: {
        title: '',
        content: '',
        date: new Date()
      },
      campingsForm: {
        name: '',
        address: '',
        phone: ''
      }
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
    createCamping() {
      return this.campingsForm
    },
    sendComment(eventId) {
      return this.comments
    },
    createEvent() {
      return this.events
    },
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
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>

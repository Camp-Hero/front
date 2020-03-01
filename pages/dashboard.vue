<template>
  <div class="columns scrollable-hidden">
    <div class="column scrollable">
      <h2 class="title has-text-grey box fixed">Campings</h2>
      <div v-if="campings" class="mt-24">
        <div
          v-for="camping in campings"
          :key="camping.id"
          class="card event-card mt-6"
        >
          <header class="card-header">
            <p class="card-header-title">
              {{ camping.name }}
            </p>
            <b-button
              @click="deleteCamping(camping.id)"
              class="card-header-icon mr-2"
              icon-left="delete"
              type="is-danger"
            >
            </b-button>
            <b-button
              @click="updateCamping"
              class="card-header-icon mr-2"
              icon-left="circle-edit-outline"
              type="is-primary"
            >
            </b-button>
          </header>
          <div
            @click="openEvents(campings.indexOf(camping), camping.id)"
            class="card-content"
          >
            <div class="content">
              <p class="has-text-weight-bold">
                Adresse :&nbsp;
                <span class="has-text-weight-normal">{{ camping.city }}</span>
                <span class="has-text-weight-normal">{{
                  camping.postalcode
                }}</span>
              </p>
              <p class="has-text-weight-bold">
                Téléphone :&nbsp;
                <span class="has-text-weight-normal">{{ camping.phone }}</span>
              </p>
            </div>
          </div>
        </div>
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
                  required
                ></b-input>
              </b-field>

              <b-field label="Ville" label-position="on-border">
                <b-input
                  v-model="campingsForm.city"
                  type="text"
                  required
                ></b-input>
              </b-field>

              <b-field label="Code postal" label-position="on-border">
                <b-input
                  v-model="campingsForm.postalcode"
                  type="number"
                  required
                ></b-input>
              </b-field>

              <b-field label="Téléphone" label-position="on-border">
                <b-input v-model="campingsForm.phone" type="tel"></b-input>
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
                  required
                ></b-input>
              </b-field>

              <b-field label="Ville" label-position="on-border">
                <b-input
                  v-model="campingsForm.city"
                  type="text"
                  required
                ></b-input>
              </b-field>

              <b-field label="Code postal" label-position="on-border">
                <b-input
                  v-model="campingsForm.postalcode"
                  type="number"
                  required
                ></b-input>
              </b-field>

              <b-field label="Téléphone" label-position="on-border">
                <b-input v-model="campingsForm.phone" type="tel"></b-input>
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
        <div v-if="campingEvents.length !== 0">
          <div
            v-for="event in campingEvents"
            :key="event.id"
            class="card event-card mt-6"
          >
            <header class="card-header">
              <p class="card-header-title">
                {{ event.name }}
              </p>
              <p class="card-header-title">
                {{ event.user.username }}
              </p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span>{{ event.beginDate }}</span>
              </a>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span>{{ event.endDate }}</span>
              </a>
              <b-button
                @click="deleteEvent(event.id)"
                class="card-header-icon mr-2"
                icon-left="delete"
                type="is-danger"
              >
              </b-button>
              <b-button
                @click="updateEvent"
                class="card-header-icon mr-2"
                icon-left="circle-edit-outline"
                type="is-primary"
              >
              </b-button>
            </header>
            <div @click="openComments(event.id)" class="card-content">
              <div class="content">
                {{ event.name }}
              </div>
            </div>
          </div>
          <div class="card mt-24">
            <header class="card-header">
              <p class="card-header-title">Créer un évenement</p>
            </header>
            <div class="card-content">
              <form>
                <b-field label="Titre" label-position="on-border">
                  <b-input
                    v-model="eventsForm.name"
                    type="text"
                    maxlength="30"
                    required
                  ></b-input>
                </b-field>

                <b-field label="Contenu" label-position="on-border">
                  <b-input
                    v-model="eventsForm.presentation"
                    type="textarea"
                    maxlength="220"
                    required
                  ></b-input>
                </b-field>

                <b-field label="Date de début" label-position="on-border">
                  <b-input
                    v-model="eventsForm.begin_date"
                    type="text"
                    maxlength="10"
                    required
                  ></b-input>
                </b-field>

                <b-field label="Date de fin" label-position="on-border">
                  <b-input
                    v-model="eventsForm.end_date"
                    type="text"
                    maxlength="10"
                    required
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
        <div v-else>
          <p class="has-text-centered is-size-4 mt-42">
            Ce camping n'a pas encore d'évenement
          </p>
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
              <b-button @click="deleteComment" class="card-header-icon mr-2">
                <b-icon pack="fas" icon-left="delete" type="is-error"> </b-icon>
              </b-button>
              <b-button @click="updateComment" class="card-header-icon mr-2">
                <b-icon
                  pack="fas"
                  icon-left="circle-edit-outline"
                  type="is-primary"
                >
                </b-icon>
              </b-button>
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
                    v-model="commentsForm.content"
                    type="textarea"
                    maxlength="220"
                    required
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
      config: {
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getUserInfo.token,
          'Content-Type': 'application/json'
        }
      },
      campings: null,
      isCommentsOpened: false,
      isEventsOpened: false,
      eventId: null,
      campingId: null,
      campingPosition: null,
      updateInterval: null,
      commentsForm: {
        content: ''
      },
      eventsForm: {
        name: '',
        presentation: '',
        begin_date: '',
        end_date: ''
      },
      campingsForm: {
        name: '',
        address: '',
        postalcode: '',
        city: '',
        phone: ''
      }
    }
  },
  computed: {
    campingEvents() {
      return this.campings[this.campingPosition].events
        ? this.campings[this.campingPosition].events
        : null
    },
    eventsComments() {
      return this.campings[this.campingPosition].events[this.eventId].comments
        ? this.campings[this.campingPosition].events[this.eventId].comments
        : null
    }
  },
  watch: {
    campings() {
      this.reloadData()
    }
  },
  created() {
    if (this.$store.getters.getConnectionInfos.token !== null) {
      this.$router.push('/dashboard')
    } else {
      this.$router.push('/')
    }
    this.$axios
      .$get('/campings', this.config)
      .then((res) => (this.campings = res))
    this.updateInterval = setInterval(this.reloadData, 60 * 1000)
  },
  beforeDestroy() {
    clearInterval(this.updateInterval)
  },
  methods: {
    async createCamping() {
      await this.$axios
        .$post('/campings', this.campingsForm, this.config)
        .then((res) => {
          if (res) {
            this.reloadData()
            this.$toast.success('Camping crée')
          } else {
            this.$toast.error('Erreur lors de la création du camping !')
          }
        })
    },
    async reloadData() {
      await this.$axios.$get('/campings', this.config)
    },
    async createEvent() {
      await this.$axios
        .$post(
          `/campings/${this.campingId}/events`,
          this.eventsForm,
          this.config
        )
        .then((res) => {
          if (res) {
            this.$axios.$get(`/campings/${this.campingId}/events`)
            this.$toast.success('Évenement crée')
          } else {
            this.$toast.error("Erreur lors de la création de l'évenement !")
          }
        })
    },
    sendComment() {
      this.$axios
        .$post(
          `/campings/${this.campingId}/events/${this.eventId}/comments`,
          this.commentsForm,
          this.config
        )
        .then((res) => {
          if (res === 'Content') {
            this.$axios
              .$get(
                `/campings/${this.campingId}/events/${this.eventId}/comments`,
                this.config
              )
              .then((res) => {
                return res
              })
            this.$toast.success('Évenement crée')
          } else {
            this.$toast.error("Erreur lors de la création de l'évenement !")
          }
        })
    },
    openEvents(campingPosition, campingId) {
      this.isEventsOpened = true
      this.campingPosition = campingPosition
      this.campingId = campingId
      if (this.eventId !== null) {
        this.isCommentsOpened = false
        this.eventId = null
      }
    },
    openComments(eventId) {
      this.isCommentsOpened = true
      this.eventId = eventId
    },
    async deleteCamping(campingId) {
      this.$axios.$delete(`/campings/${campingId}`, this.config)
      await this.reloadData()
    },
    async deleteEvent(eventId) {
      this.$axios.$delete(`/events/${eventId}`, this.config)
      await this.reloadData()
    },
    deleteComment(commentId) {
      return this.comments
    },
    updateCamping(campingId) {
      return this.campings
    },
    updateEvent(eventId) {
      return this.events
    },
    updateComment(commentId) {
      return this.comments
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

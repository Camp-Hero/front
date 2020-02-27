<template>
  <section>
    <div class="column is-4 is-offset-4">
      <div class="card">
        <b-tabs expanded size="is-large" position="is-centered" class="d block">
          <b-tab-item label="Connexion" icon="account">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title has-text-grey">
                  Connexion
                </p>
              </header>
              <div class="card-content">
                <form>
                  <b-field label="Nom d'utilisateur" label-position="on-border">
                    <b-input
                      v-model="user.username"
                      type="text"
                      maxlength="30"
                      required
                    ></b-input>
                  </b-field>

                  <b-field label="Mot de passe" label-position="on-border">
                    <b-input
                      v-model="user.password"
                      type="password"
                      maxlength="30"
                      required
                    ></b-input>
                  </b-field>
                  <b-button
                    @click="login"
                    expanded
                    class="is-primary"
                    type="submit"
                    >Envoyer</b-button
                  >
                </form>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="Inscription" icon="account-card-details">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title has-text-grey">
                  Inscription
                </p>
              </header>
              <div class="card-content">
                <form>
                  <b-field label="Nom d'utilisateur" label-position="on-border">
                    <b-input
                      v-model="user.username"
                      maxlength="30"
                      required
                    ></b-input>
                  </b-field>

                  <b-field label="Email" label-position="on-border">
                    <b-input
                      v-model="user.email"
                      type="email"
                      maxlength="30"
                      required
                    >
                    </b-input>
                  </b-field>

                  <b-field label="Mot de passe" label-position="on-border">
                    <b-input
                      v-model="user.password"
                      type="password"
                      maxlength="30"
                      required
                    ></b-input>
                  </b-field>
                  <b-button
                    @click="register"
                    expanded
                    class="is-primary"
                    type="submit"
                    >Envoyer</b-button
                  >
                </form>
              </div>
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      userToken: null,
      statusCode: null
    }
  },
  methods: {
    login() {
      if (this.user.username !== '' && this.user.password !== '') {
        this.$axios
          .$post('/auth/login', this.user)
          .then((res) => {
            this.userToken = res.token
            this.$store.state.token = res.token
            this.$toast.success('Vous êtes connecté !')
            this.goToDashboard()
          })
          .catch((err) =>
            this.$toast.error('Erreur lors de la connexion !', err)
          )
      }
    },
    register() {
      if (this.user.username !== '') {
        if (this.user.email !== '') {
          this.$axios
            .$post('/auth/register', {
              username: this.user.username,
              email: this.user.email,
              password: this.user.password
            })
            .then((res) => {
              this.userToken = res.token
              this.$store.state.token = res.token
              this.$toast.success(
                'Votre compte a été crée et vous êtes connecté !'
              )
              this.goToDashboard()
            })
            .catch((err) =>
              this.$toast.error('Erreur lors de la connexion !', err)
            )
        }
      }
    },
    goToDashboard() {
      if (
        (this.statusCode !== 200 && this.userToken === null) ||
        this.userToken === undefined
      ) {
        this.$toast.error('Erreur lors de la connection !')
      } else {
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>

<template>
  <div class="buttons">
    <div class="title-h2">
      Buttons kit
    </div>
    <div class="buttons__list">
      <div class="buttons__item">
        <div class="buttons__title title-h3">
          Primary button
        </div>
        <AppButton
          text="Primary large"
          btn-role="primary"
          btn-type="button"
          btn-style="filled"
          btn-size="large"
        />
      </div>
      <div class="buttons__item">
        <div class="buttons__title title-h3">
          Secondary button
        </div>
        <AppButton
          text="Secondary normal"
          btn-role="secondary"
          btn-type="link"
          btn-style="bordered"
          btn-size="normal"
          fa-icon="fas, user"
        />
      </div>
      <div class="buttons__item">
        <div class="buttons__title title-h3">
          Button with select
        </div>
        <AppButton
          text="With select"
          btn-role="secondary"
          btn-type="select"
          btn-style="bordered"
          btn-size="small"
          :menu="buttonMenu"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonMenu: [
        {
          icon: 'user',
          text: 'Login with google',
        },
        {
          faIcon: 'fas, user',
          text: 'Login with email',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.buttons__list {
  display: flex;
}

.buttons__item {
  &:not(:last-child) {
    margin-right: 20px;
  }
}

.buttons__title {
  margin-bottom: 10px;
}
</style>

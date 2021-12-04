<template>
  <div class="buttons">
    <div class="title-h2">
      Buttons kit
    </div>
    <div class="buttons__item">
      <div class="title-h3">
        Primary button
      </div>
      <AppButton
        text="Login"
        btn-role="primary"
        btn-type="button"
        btn-style="filled"
        btn-size="large"
        svg-icon="user"
      />
      <AppButton
        text="Not now"
        btn-role="secondary"
        btn-type="link"
        btn-style="bordered"
        btn-size="small"
        fa-icon="fas, user"
      />
    </div>
  </div>
</template>

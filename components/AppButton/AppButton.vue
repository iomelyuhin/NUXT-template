<template>
  <div class="button-wrapper">
    <button
      v-if="btnType == 'button'"
      :class="`button ${btnRole} ${btnStyle} ${btnSize}`"
    >
      <div class="button__icon">
        <img
          class="button__icon-pic"
          v-if="svgIcon"
          :src="require(`@/assets/images/icons/${svgIcon}.svg`)"
        />
        <font-awesome-icon
          class="button__icon-fa"
          v-if="faIcon"
          :icon="[faIconType, faIconName]"
        />
      </div>
      <div class="button__text">{{ text }}</div>
    </button>
    <a
      :href="link"
      v-if="btnType == 'link'"
      :class="`button ${btnRole} ${btnStyle} ${btnSize}`"
    >
      <div class="button__icon">
        <img
          class="button__icon-pic"
          v-if="svgIcon"
          :src="require(`@/assets/images/icons/${svgIcon}.svg`)"
        />
        <font-awesome-icon
          class="button__icon-fa"
          v-if="faIcon"
          :icon="[faIconType, faIconName]"
        />
      </div>
      <div class="button__text">{{ text }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    btnRole: String,
    btnType: String,
    btnStyle: String,
    btnSize: String,
    link: String,
    svgIcon: String,
    faIcon: String
  },
  computed: {
    faIconType() {
      return this.faIcon.split(", ")[0];
    },
    faIconName() {
      return this.faIcon.split(", ")[1];
    }
  }
};
</script>

<style lang="scss" scoped>
//colors
$app-btn-primary-text-color: $white;
$app-btn-primary-button-color: #238636;
$app-btn-primary-text-hover-color: #fff;
$app-btn-primary-button-hover-color: #2ea043;

$app-btn-secondary-text-color: #fff;
$app-btn-secondary-button-color: #21262d;
$app-btn-secondary-text-hover-color: #fff;
$app-btn-secondary-button-hover-color: #15181b;

//fonts sizes
$app-btn-large-font-size: 35px;
$app-btn-normal-font-size: 24px;
$app-btn-small-font-size: 18px;

//paddings
$app-btn-large-size-paddings: 20px 30px;
$app-btn-normal-size-paddings: 15px 20px;
$app-btn-small-size-paddings: 8px 13px;

//radius
$app-btn-large-radius: 20px;
$app-btn-normal-radius: 10px;
$app-btn-small-radius: 5px;

//icon margin
$app-btn-large-size-margin-icon: 5px;
$app-btn-normal-size-margin-icon: 10px;
$app-btn-small-size-margin-icon: 20px;

//icon size
$app-btn-large-icon: 35px;
$app-btn-normal-icon: 24px;
$app-btn-small-icon: 18px;

.button {
  display: flex;
  align-items: center;
  width: fit-content;
  padding: $app-btn-normal-size-paddings;
  border-radius: $app-btn-normal-radius;
  background-color: $app-btn-primary-button-color;
  color: $app-btn-primary-text-color;
  font-size: $app-btn-normal-font-size;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: $app-btn-primary-button-hover-color;
    color: $app-btn-primary-text-hover-color;
  }

  &.primary {
  }
  &.secondary {
    color: $app-btn-secondary-text-color;
    background-color: $app-btn-secondary-button-color;
    &:hover {
      background-color: $app-btn-secondary-button-hover-color;
      color: $app-btn-secondary-text-hover-color;
    }
  }

  &.small {
    padding: $app-btn-small-size-paddings;
    border-radius: $app-btn-small-radius;
    font-size: $app-btn-small-font-size;

    & .button__icon-pic {
      width: $app-btn-small-icon;
      height: $app-btn-small-icon;
    }
  }
  &.normal {
    padding: $app-btn-normal-size-paddings;
    border-radius: $app-btn-normal-radius;
    font-size: $app-btn-normal-font-size;

    & .button__icon-pic {
      width: $app-btn-normal-icon;
      height: $app-btn-normal-icon;
    }
  }
  &.large {
    padding: $app-btn-large-size-paddings;
    border-radius: $app-btn-large-radius;
    font-size: $app-btn-large-font-size;

    & .button__icon-pic {
      width: $app-btn-large-icon;
      height: $app-btn-large-icon;
    }
  }
}

.button__icon-pic {
  width: $app-btn-normal-icon;
  height: $app-btn-normal-icon;
}

.button__icon {
  margin-right: $app-btn-normal-size-margin-icon;
}
</style>

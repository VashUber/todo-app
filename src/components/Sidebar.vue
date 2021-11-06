<template>
    <div class="sidebar">
        <div class="sidebar__toggle">
            <Toggle/>
        </div>
        <nav class="sidebar__navigation">
            <router-link to="/" class="sidebar__link" exact>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                     role="img" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96z"
                          fill="white"/>
                </svg>
                Важные
            </router-link>
            <router-link to="/daily" class="sidebar__link" exact>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                     role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                          fill="white"/>
                </svg>
                Ежедневные
            </router-link>
        </nav>
    </div>
</template>

<script>
import Toggle from "@/components/Toggle";

export default {
    name: "Sidebar",
    components: {
        Toggle
    }
}
</script>

<style scoped lang="scss">
.sidebar {
  min-height: 100vh;
  width: 210px;
  position: fixed;
  grid-area: side;
  background: rgba(77, 97, 136, 0.25);
  backdrop-filter: blur(4px);
  z-index: 4;
  display: flex;
  flex-direction: column;

  &__toggle {
    align-self: center;
    margin-top: 20px;
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 10px;
  }

  &__link {
    color: #ffffff;
    text-decoration: none;
    height: 40px;
    display: flex;
    align-items: center;

    svg {
      padding-right: 10px;
      width: 35px;
    }

    &--active {
      text-decoration: underline 2px solid;
      text-underline-offset: 4px;
    }

    &:not(:first-child) {
      margin-top: 25px;
    }

  }
}
</style>
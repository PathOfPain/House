<script lang="ts" setup></script>

<template>
  <div class="team">
    <div class="team__frame">
      <img
        src="/src/assets/image/frame.png"
        alt="frame"
        width="420"
        height="445"
      />
      <img
        class="team__frame-brushes"
        src="/src/assets/image/brushes.png"
        alt="brushes"
        width="229"
        height="447"
      />
    </div>
    <div class="team__members">
      <h1>Наша команда</h1>
      <h2>
        Значимость этих проблем настолько очевидна, что базовый вектор<br />
        развития позволяет оценить значение экспериментов, поражающих<br />
        по своей масштабности и грандиозности. Мы вынуждены отталкиваться <br />
        от того, что консультация с широким активом.
      </h2>
      <ul class="team__members-list">
        <li class="team__members-item">
          <img
            src="/src/assets/image/team/girl.png"
            alt="girl"
            width="80"
            height="80"
          />
        </li>
        <li class="team__members-item">
          <img
            src="/src/assets/image/team/boy.png"
            alt="boy"
            width="80"
            height="80"
          />
        </li>
        <li class="team__members-item">
          <img
            src="/src/assets/image/team/man.png"
            alt="man"
            width="80"
            height="80"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team {
  margin-bottom: 56px;
  width: px-to-rem(1440);
  height: auto;
  padding: 0 px-to-rem(215);
  display: flex;
  gap: 30px;
}

.team__frame {
  position: relative;
  padding-top: 135px;
}

.team__frame-brushes {
  position: absolute;
  top: 14%;
  left: 38%; /* Центрируем кисти по горизонтали относительно контейнера */
  transform: translateX(-50%);
  z-index: 2;
}

.team__members {
  padding-top: 180px;
  padding-bottom: 100px;
}


.team__members h1 {
  font-size: 40px;
  line-height: 1.1;
  padding-bottom: 20px;
}

.team__members h2 {
  font-size: $font-size-description-item;
  line-height: 1.5;
  padding-bottom: 20px;
}

.team__members-list {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>


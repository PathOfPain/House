<script lang="ts" setup></script>

<template>
	<div class="promo">
		<div class="promo__title">
			<img src="/src/assets/icons/Star.svg" alt="Star" />
			<h1>
				<br />Новая коллекция<br />
				французских авторов
			</h1>
		</div>
		<div class="promo__text">
			<p>
				Сложно сказать, почему акционеры крупнейших компаний<br />
				призывают нас к новым свершениям, которые, в свою очередь,<br />
				должны быть заблокированы в рамках своих собственных <br />рациональных
				ограничений.
			</p>
			<p>
				<br />Принимая во внимание показатели успешности, граница<br />
				обучения кадров предопределяет высокую востребованность<br />
				направлений прогрессивного развития.
			</p>
		</div>
		<button class="promo__btn" type="button">Ознакомиться</button>
	</div>
</template>

<style lang="scss" scoped>
.promo {
	padding-top: 25px;
	padding-left: 220px;
	margin-top: 56px;
	min-width: px-to-rem(1440);
	height: px-to-rem(574);
	background-image: url('/src/assets/image/promo-bg.png');
	background-size: cover;
	background-position: center;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to right,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0.3) 50%,
			rgba(0, 0, 0, 0) 100%
		);
		z-index: 1;
		pointer-events: none;
	}
}

.promo__title,
.promo__text,
.promo__btn {
	position: relative;
	z-index: 2;
}

.promo__title {
	display: flex;
	gap: 20px;
}

.promo__title img {
	padding-top: 40px;
}

.promo__title h1 {
	font-size: 40px;
	color: $promo-title-color;
}

.promo__text {
	padding-top: 20px;
	padding-bottom: 60px;
	color: $promo-text-color;
	font-size: $font-size-description-item;
	line-height: 1.5;
}

.promo__btn {
	background-color: $promo-bg;
	font-size: $font-size-base;
}
</style>

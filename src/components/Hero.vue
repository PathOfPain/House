<script lang="ts" setup></script>

<template>
	<div class="hero">
		<div class="hero__img">
			<img src="/src/assets/image/bird.png" alt="bird" />
		</div>
		<div class="hero__content">
			<h1 class="hero__title"><br>Реплики картин<br/> от <span>Ink. House</span></h1>
			<h2 class="hero__description">
				<br />Высокое качество отрисовки на плотной бумаге или льняном<br />
				холсте. Редкие произведения, доступные цены.
			</h2>
			<button class="hero__button" type="button">Продукция</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	min-width: px-to-rem(1440);
	height: px-to-rem(620);
	display: flex;
	justify-content: center;
	gap: 30px;
	margin-top: 56px;
	padding: 0 px-to-rem(165);
}
.hero__img {
	width: px-to-rem(540);
	height: px-to-rem(621);
}
.hero__content {
	width: px-to-rem(540);
	height: px-to-rem(331);
	padding: px-to-rem(145) 0;
}
.hero__title {
	font-family: $font-family-base;
	font-size: 60px;
	font-weight: $font-weight-medium;
	line-height: 1.1;
}

.hero__title span {
	color: $primary-color;
}

.hero__description {
	margin-top: 20px;
	color: $primary-description;
	font-family: $font-family-base;
	font-weight: $font-weight-medium;
	line-height: 1.5;
}
.hero__button {
	margin-top: 60px;
	color: $primary-color;
	font-size: $font-size-base;
	background-color: $primary-bg;
	border: $tab-focus-border;
}

//tablet

@media (max-width: 1024px) {
	.hero {
		flex-direction: column;
		align-content: stretch;
		justify-content: flex-start;
		padding: 1 10px;
		gap: 1px;
	}

	.hero__img {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero__img img {
		max-width: px-to-rem(500);
		height: auto;
	}

	.hero__content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero__title {
		font-size: px-to-rem(42);
		text-align: center;
	}

	.hero__description {
		font-size: px-to-rem(18);
		text-align: start;
	}

	.hero__button {
		width: auto;
		text-align: center;
	}
}

// mobile

@media (max-width: 768px) {
	.hero {
		flex-direction: column;
		align-content: stretch;
		justify-content: flex-start;
		padding: 1 10px;
		gap: 1px;
	}

	.hero__img {
    padding-right: 350px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero__img img {
		max-width: px-to-rem(400);
		height: auto;
	}

	.hero__content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero__title {
    padding-right: 250px;
		font-size: px-to-rem(28);
		text-align: start;
	}

	.hero__description {
    padding-right: 250px;
		font-size: px-to-rem(16);
		text-align: start;
	}

	.hero__button {
		width: auto;
		text-align: center;
	}
}

//smartphone

@media (max-width: 480px) {
	.hero {
		padding: 0 10px;
		flex-direction: column;
		align-content: stretch;
		justify-content: flex-start;
		padding: 1 10px;
		gap: 1px;
	}

	.hero__img {
		display: flex;
		justify-content: start;
		align-items: start;
	}

	.hero__img img {
		max-width: px-to-rem(300);
		height: auto;
	}

	.hero__content {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	.hero__title {
		font-size: px-to-rem(20);
		text-align: start;
	}

	.hero__description {
		font-size: px-to-rem(12);
		text-align: start;
	}

	.hero__button {
		width: auto;
		text-align: center;
	}
}
</style>
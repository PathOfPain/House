<script lang="ts" setup></script>

<template>
	<div class="header">
		<img
			src="/src/assets/icons/logo-nav.svg"
			alt="logo-nav"
			width="143"
			height="35"
		/>
		<ul class="header__nav-list">
			<li class="header__nav-item"><a href="/">Репродукции</a></li>
			<li class="header__nav-item"><a href="/">Новинки</a></li>
			<li class="header__nav-item"><a href="/">О нас</a></li>
			<li class="header__nav-item">
				<img src="/src/assets/icons/shopping-cart.svg" alt="shopping-cart" />
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.header {
	min-width: px-to-rem(1440);
	height: px-to-rem(100);
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: $main-bg;
	padding: 0 px-to-rem(165);

	// tablet
	@media (max-width: 1024px) {
		min-width: auto;
		padding: 0 px-to-rem(40);
	}

	//media
	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
		padding: px-to-rem(10);
	}
}

.header__nav-list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 60px;
}

.header__nav-item {
	font-family: $font-family-base;
	font-size: $font-size-base;
	font-weight: $font-weight-medium;
}
</style>

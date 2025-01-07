<script lang="ts" setup></script>

<template>
	<div class="footer">
		<div class="footer__container">
			<div class="footer__container-logo">
				<img
					src="/src/assets/icons/logo-nav.svg"
					alt="logo"
					width="143"
					height="35"
				/>
				<h1>+7 (999) 543-54-54</h1>
				<h2>Мастерская</h2>
			</div>
			<div class="footer__container-reproduction">
				<h1>Репродукции</h1>
				<ul class="footer__container-reproduction-list">
					<li class="footer__container-reproduction-item">Франция</li>
					<li class="footer__container-reproduction-item">Германия</li>
					<li class="footer__container-reproduction-item">Англия</li>
				</ul>
			</div>
			<div class="footer__container-new">
				<h1>Новинки</h1>
				<ul class="footer__container-new-list">
					<li class="footer__container-new-item">2021</li>
					<li class="footer__container-new-item">2020</li>
				</ul>
			</div>
			<div class="footer__container-flex">
				<div class="footer__container-about">
					<h1>О нас</h1>
					<ul class="footer__container-about-list">
						<li class="footer__container-about-item">Художники</li>
						<li class="footer__container-about-item">Менеджеры</li>
					</ul>
				</div>
				<div class="footer__container-icons">
					<ul class="footer__container-icons-list">
						<li class="footer__container-icons-item">
							<img
								src="/src/assets/icons/facebook.svg"
								alt="facebook"
								width="24"
								height="24"
							/>
						</li>
						<li class="footer__container-icons-item">
							<img
								src="/src/assets/icons/instagram.svg"
								alt="instagram"
								width="24"
								height="24"
							/>
						</li>
						<li class="footer__container-icons-item">
							<img
								src="/src/assets/icons/youtube.svg"
								alt="youtube"
								width="24"
								height="24"
							/>
						</li>
					</ul>
					<p>Ink. House ®</p>
					<p>All rights reserved</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.footer {
	background-color: $main-bg;
	padding: 0 px-to-rem(215);
}
.footer__container {
	display: flex;
	justify-content: space-between;
	padding-bottom: 26px;
	padding-top: 23px;
}
.footer__container-logo {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.footer__container-logo image {
	padding-bottom: 35px;
}

.footer__container-logo h1 {
	font-size: $font-size-base;
    margin-top: 21px;
}

.footer__container-logo h2 {
	color: $primary-description;
	font-size: $font-size-description-item;
}
.footer__container-reproduction h1 {
	font-size: $font-size-base;  
}

.footer__container-reproduction-list {
	display: flex;
	flex-direction: column;
	gap: 6px;
	color: $primary-description;
	font-size: $font-size-description-item;
	line-height: 1.5;
}

.footer__container-new {
	font-size: $font-size-base;
}
.footer__container-new-list {
	display: flex;
	flex-direction: column;
	gap: 6px;
	color: $primary-description;
	font-size: $font-size-description-item;
	line-height: 1.5;
}

.footer__container-flex {
	display: flex;
	gap: 251px;
}
.footer__container-about {
	font-size: $font-size-base;
}

.footer__container-about-list {
	display: flex;
	flex-direction: column;
	gap: 6px;
	color: $primary-description;
	font-size: $font-size-description-item;
	line-height: 1.5;
}

.footer__container-icons p {
	display: flex;
	flex-direction: column;
  padding-top: 6px;
  font-size: 12px;
  color: $primary-description;
  line-height: 1.2;
}
.footer__container-icons-list {
	display: flex;
	flex-direction: row;
	gap: 30px;
}
</style>

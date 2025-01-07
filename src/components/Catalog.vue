<script lang="ts" setup></script>

<template>
	<div class="catalog">
		<div class="catalog__nav">
			<h1>Репродукции</h1>
			<ul class="catalog__list">
				<li class="catalog__item"><button>Франция</button></li>
				<li class="catalog__item"><button>Германия</button></li>
				<li class="catalog__item"><button>Англия</button></li>
			</ul>
		</div>
		<div class="catalog__container">
			<ul class="catalog__container-list">
				<li class="catalog__container-item">
					<img src="/src/assets/image/art/Amurs_hunt.svg" alt="Amurs_hunt" />
					<p>Марсель Руссо</p>
					<h1>Охота Амура</h1>
					<h2>Холст, масло (50х80)</h2>
					<h3>14 500 руб</h3> 
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img
						src="/src/assets/image/art/Lady_with_a_dog.svg"
						alt="Lady_with_a_dog"
					/>
					<p>Анри Селин</p>
					<h1>Дама с собачкой</h1>
					<h2>Акрил, бумага (50х80)</h2>
					<h3>16 500 руб</h3> 
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img src="/src/assets/image/art/Procedure.svg" alt="Procedure" />
					<p>Франсуа Дюпон</p>
					<h1>Процедура</h1>
					<h2>Цветная литография (40х60)</h2>
					<h3>20 000 руб</h3> 
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img src="/src/assets/image/art/Rose.svg" alt="Rose" />
					<p>Луи Детуш</p>
					<h1>Роза</h1>
					<h2>Бумага, акрил (50х80)</h2>
					<h3>12 000 руб</h3> 
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img
						src="/src/assets/image/art/A_birds_meal.svg"
						alt="A_birds_meal"
					/>
					<p>Франсуа Дюпон</p>
					<h1>Птичья трапеза</h1>
					<h2>Цветная литография (40х60)</h2>
					<h3>22 500 руб </h3> 
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img
						src="/src/assets/image/art/Landscape_with_fish.svg"
						alt="Landscape_with_fish"
					/>
					<p>Пьер Моранж</p>
					<h1>Пейзаж с рыбой</h1>
					<h2>Цветная литография (40х60)</h2>
					<h3>20 000 руб</h3> 
					<button>В корзину</button>
				</li>
				<!-- <li class="catalog__container-item">
                                        <img src="/src/assets/image/art/Above_the_city.svg" alt="Above_the_city" />
                                        <p>Курт Вернер</p>
                                        <h1>Над городом</h1>
                                        <h2>Цветная литография (40х60) </h2>
                                      	<h3>16 000 руб </h3> 
                                        <button>В корзину</button>
                                      </li>
                                      <li class="catalog__container-item">
                                        <img src="/src/assets/image/art/Chicks.svg" alt="Chicks.svg" />
                                        <p>Макс Рихтер</p>
                                        <h1>Птенцы</h1>
                                        <h2>Холст, масло (50х80) </h2>
                                       	<h3>14 500 руб  </h3> 
                                        <button>В корзину</button>
                                      </li>
                                      <li class="catalog__container-item">
                                        <img src="/src/assets/image/art/Among_the_leaves.svg" alt="Among_the_leaves" />
                                        <p>Мартин Майер</p>
                                        <h1>Среди листьев</h1>
                                        <h2>Цветная литография (40х60)</h2>
                                      	<h3>20 000 руб	</h3>	
                                        <button>В корзину</button>
                                      </li>
                                      <li class="catalog__container-item">
                                        <img src="/src/assets/image/art/A_brightly_colored_bird.svg" alt="A_brightly_colored_bird" />
                                        <p>Герман Беккер</p>
                                        <h1>Яркая птица</h1>
                                        <h2>Цветная литография (40х60) </h2>
                                      	<h3>13 000 руб	</h3>  
                                        <button>В корзину</button>
                                      </li>
                                      <li class="catalog__container-item">
                                        <img src="/src/assets/image/art/Woodpeckers.svg" alt="Woodpeckers" />
                                        <p>Вульф Бауэр</p>
                                        <h1>Дятлы</h1>
                                        <h2>Бумага, акрил (50х80) </h2>
                                      	<h3>20 000 руб	</h3> 
                                        <button>В корзину</button>
                                      </li>
                                      <li class="catalog__container-item">
                                        <img src="/src/assets/image/art/Big_Waters.svg" alt="Big_Waters" />
                                        <p>Вальтер Хартманн</p>
                                        <h1>Большие воды</h1>
                                        <h2>Бумага, акрил (50х80) </h2>
                                      	<h3>23 000 руб	</h3>	
                                        <button>В корзину</button>
                                      </li>
        				<li class="catalog__container-item">
					<img src="/src/assets/image/art/Wild_beast.svg" alt="Wild_beast" />
					<p>Пол Смит</p>
					<h1>Дикий зверь</h1>
					<h2>Акварель, бумага (50х80)  </h2>
					<h3>19 500 руб	</h3>	
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img src="/src/assets/image/art/Rocky_shore.svg" alt="Rocky_shore" />
					<p>Джон Уайт</p>
					<h1>Скалистый берег</h1>
					<h2>Цветная литография (40х60) </h2>
					<h3>17 500 руб	</h3> 
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img src="/src/assets/image/art/River_and_mountains.svg" alt="River_and_mountains" />
					<p>Джим Уотсон</p>
					<h1>Река и горы</h1>
					<h2>Акварель, бумага (50х80) </h2>
					<h3>20 500 руб	</h3>		
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img src="/src/assets/image/art/White_parrot.svg" alt="White_parrot" />
					<p>Юджин Зиллион</p>
					<h1>Белый попугай</h1>
					<h2>Цветная литография (40х60) </h2>
					<h3>15 500 руб	</h3>		
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img src="/src/assets/image/art/Night_fish.svg" alt="Night_fish" />
					<p>Эрик Гиллман</p>
					<h1>Ночная рыба</h1>
					<h2>Бумага, акрил (50х80) </h2>
					<h3>12 500 руб</h3>	
					<button>В корзину</button>
				</li>
				<li class="catalog__container-item">
					<img src="/src/assets/image/art/Red_cat.svg" alt="Red_cat" />
					<p>Альфред Барр</p>
					<h1>Рыжий кот</h1>
					<h2>Цветная литография (40х60) </h2>
					<h3>21 000 руб		</h3>	
					<button>В корзину</button> 
				 </li>   -->
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.catalog {
	margin-top: 56px;
  min-width: px-to-rem(1440);
  height: px-to-rem(1564);
	padding: 0 px-to-rem(215);
}
.catalog__nav {
  display: flex;
  justify-content: space-between;
}

.catalog__nav h1{
	font-size: 40px;
  font-weight: $font-weight-medium;
}

.catalog__list {
	display: flex;
	gap: 32px;
}
.catalog__item button {
  background-color: $primary-focus-bg;
	width: $button-width;
	height: $button-height;
	border-radius: $corner-radius;
}
.catalog__container {
		margin-top: 30px;
}
.catalog__container-list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
	
}

.catalog__container-item {
  @extend .card;

  img {
    @extend .card__item;
    margin-bottom: px-to-rem(10);
  }

  p {
      @extend .card__item-author;
  }

  h1 {
    @extend .card__item-title;
  }

  h2 {
    @extend .card__item-description;
  }

  h3 {
    @extend .card__item-price;
  }

  button {
    @extend .card__item-button;
  }
}


</style>

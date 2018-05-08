<header class="head_main">
	<div class="container">
		<div class="col-xs-4">
			<a href="<?php echo $this->Url->build(['controller' => 'Top', 'action' => 'index']); ?>" class="head_logo">
				<?php echo $this->Html->image('https://placehold.jp/200x200.png', ['class' => '','alt' => 'ここにロゴ']) ?>
			</a>
		</div>
		<div class="col-xs-4 head_search">
		<?php echo $this->element('search_form'); ?>
			
		</div>
		<div class="col-xs-4 head_result">
			<p>{99} hit</p>
		</div>
	</div>
</header>

<?php /*
<nav style="background-color:#eee;">
	<a href="<?php echo $this->Url->build(['controller' => 'Top', 'action' => 'index']); ?>">ここにロゴ</a>
	<div>
		<ul>
			<li>
				<a href="<?php echo $this->Url->build(['controller' => 'Image', 'action' => 'upload']); ?>">画像アップロード</a>
			</li>
		</ul>
	</div>
</nav>

*/ ?>
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

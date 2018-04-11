<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
	<a class="navbar-brand" href="<?php echo $this->Url->build(['controller' => 'Top', 'action' => 'index']); ?>">ここにロゴ</a>
	 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<a class="nav-link" href="<?php echo $this->Url->build(['controller' => 'Image', 'action' => 'upload']); ?>">画像アップロード</a>
			</li>
		</ul>
	</div>
</nav>

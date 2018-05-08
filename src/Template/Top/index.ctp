<section class="wrapper">
	<div class="container">
		<div class="col-xs-4 col-xs-offset-4 padding_none margin_b_xlarge">
			<h1 class="text-center top_logo margin_b_large">
				<?php echo $this->Html->image('logo.svg', ['class' => '','alt' => '']) ?>
			</h1>
			<?php echo $this->element('search_form'); ?>
		</div>

		<h2 class="clear font_large weight_bold">最近追加された素材</h2>
		<div class="row">
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			<div class="col-sm-3 col-xs-6 margin_t_medium" >
				<?php echo $this->element('image_box'); ?>
			</div>
			
		</div>


	</div>
</section>


<?php /*========================================================================*/ ?>

TOP画面です

<a href="<?php echo $this->Url->build(['controller' => 'Result', 'action' => 'index']); ?>">
	検索用画面へ
</a>

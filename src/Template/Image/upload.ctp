<?php echo $this->Form->create(false, ['type' => 'file']); ?>
	<?php echo $this->Form->file('uploadImage'); ?>
	<?php echo $this->Form->submit('画像をアップロード', ['class' => 'btn btn-primary']); ?>
<?php echo $this->Form->end(); ?>

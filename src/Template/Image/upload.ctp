<script>
$(function(){
	$('#js-upload-image').on('change', function(e){
		var file = e.target.files[0];
		if (!file) {
			return;
		}
		if(!file.type.match('image*')) {
			alert('画像を選択してください');
			return;
		}

		var r = new FileReader();
		r.onload = function(e) {
			var contents = e.target.result;

			var params = {
				'visualFeatures': 'Description',
				'details': '',
				'language': 'en',
			};

			$.ajax({
				url: 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?' + $.param(params),
				contentType: 'application/octet-stream',
				headers: {
					'Ocp-Apim-Subscription-Key': '0ec642eac6bc47edb593410ac1ede477'
				},
				beforeSend: function() {
					$('#js-image-loading').show();
				},
				type: 'POST',
				data: contents,
				processData: false
			}).done(function(data) {
				$('#js-response-display').text(data.description.tags.join(', '));
				$("#js-image-display").attr('src', r.result)

			}).always(function() {
				$('#js-image-loading').hide();
				alert('ajax終わり');
			});
		}
		r.readAsArrayBuffer(file);
	});
});
</script>
<?php echo $this->element('Common/loading'); ?>

<?php echo $this->Form->create(false, ['type' => 'file']); ?>
	<img id="js-image-display" src=""></img>
	<?php echo $this->Form->file('uploadImage', ['id' => 'js-upload-image']); ?>
	<?php echo $this->Form->submit('画像をアップロード', ['class' => 'btn btn-primary']); ?>
<?php echo $this->Form->end(); ?>

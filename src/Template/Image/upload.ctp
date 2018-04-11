<script>
$(function(){
	$('#js-upload-image').on('change', function(e){
		var file = e.target.files[0];

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
			}).always(function() {
				$('#js-image-loading').hide();
				alert('ajax終わり');
			});
		}
		r.readAsArrayBuffer(file);
	});
});
</script>
<style>
.loading {
	opacity: 0.5;
}
</style>
<?php echo $this->element('Common/loading'); ?>

<?php echo $this->Form->create(false, ['type' => 'file']); ?>
	<?php echo $this->Form->file('uploadImage', ['id' => 'js-upload-image']); ?>
	<div id="js-response-display"></div>
	<?php echo $this->Form->submit('画像をアップロード', ['class' => 'btn btn-primary']); ?>
<?php echo $this->Form->end(); ?>

<?php
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Network\Exception\ForbiddenException;
use Cake\Network\Exception\NotFoundException;
use Cake\View\Exception\MissingTemplateException;

class ImageController extends AppController
{
    public function upload()
    {
		if (empty($this->request->data)) {
			return $this->render();
		}

		debug($this->request->data['uploadImage']);

		$url = 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0';
		$file = $this->request->data['uploadImage']['tmp_name'];

		$curl = curl_init();
		curl_setopt_array(
			$curl,
			[
				CURLOPT_URL => $url,
				CURLOPT_HTTPHEADER => [
					'Content-Type: application/octet-stream',
					'Ocp-Apim-Subscription-Key: 2445da8921d94ea98f9d25d86bcc13eb'
				],
				CURLOPT_POST => true,
				CURLOPT_POSTFIELDS  => file_get_contents($file),
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_BINARYTRANSFER => true,
			]
		);

	$response = curl_exec($curl);
	curl_close($curl);

	var_dump(json_decode($response));
    }
}

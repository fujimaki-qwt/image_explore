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
    }
}

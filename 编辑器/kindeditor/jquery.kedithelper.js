;(function($){
	//---------------编辑器------------------
	var kindEditorHelper = {
		/**
		 	var editor = KindEditorHelper.createEditor('textarea[name="description"]',{
				uploadJson : '<if condition="I('get.id')"> {:U('Products/edit')}<else />{:U('Products/add')} </if>',
			});
		 */
		createEditor : function(selector,options){
			 //富文本框插件
			 var defaultConfig = {
				autoHeightMode : true,
				width: '100%',
				height: '300px',
				resizeType: 1,
				pasteType : 4,
				urlType : 'absolute',
				//文件上传
				allowFileManager : false,
				allowImageRemote : false,
				filePostName:'file',
				formatUploadUrl:true,
				uploadJson : '',
				extraFileUploadParams:{'is_kupload': '1','ajax': '1','is_kind': '1'},
				afterCreate : function() {
					//this.loadPlugin('autoheight');
				},
				items : [ 
				   		  /*'undo', 'redo', '|', */'cut', 'copy', 'paste',
				   		/* 'plainpaste',  *//*'wordpaste', '|',*/ /* 'justifyleft', 'justifycenter', 'justifyright',
				   		'justifyfull',  */'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
				   		'superscript', 'clearhtml'/* , 'quickformat', 'selectall'*/,  '|', 'formatblock', 'fontname', 'fontsize', '|', /* '/', */
				   		'forecolor', 'hilitecolor', 'bold','italic', 'underline', 'strikethrough', /* 'lineheight', */ 'removeformat', '|', 
				   		'image', /*'multiimage','flash', 'media', */
				   		/*'table', */'hr',/* 'baidumap', */ 'pagebreak',
				   		/* 'anchor', */ 'link', 'unlink'/* , '|', 'about' */,'|','source'
				   	],
			};
			
			var settings = jQuery.extend({}, defaultConfig, options);
			var uploadJson = settings.uploadJson;
			if(uploadJson==null||uploadJson==''||typeof uploadJson=='undefined'){
				settings.allowImageUpload = false;	
				settings.allowFileManager = false;	
			}
			return KindEditor.create(selector,settings);
		}
	};

	$.extend({
		/**
		    <script charset="utf-8" src="../kindeditor/kindeditor.js"></script>
		    var editor = $.kindEditorHelper.createEditor('textarea[name="description"]',{
				uploadJson : '<if condition="I('get.id')"> {:U('Products/edit')}<else />{:U('Products/add')} </if>',
			});
		 */
		kindEditorHelper: kindEditorHelper,
	});
})(jQuery);
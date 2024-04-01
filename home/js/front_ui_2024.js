var frontUI = {
	init: function () {
	  var self = this;
  
	  if (typeof window.w3 !== 'undefined') {
		w3.includeHTML(function () {
		  self.gnb();
		  self.gnb_2024();
		  self.headerSearch();
		  self.headerScroll();
		  self.pagingActive();
		  self.searchResultSorting();
		  self.pathIndicator();
		  self.dateSelect.execute();
		  self.datepicker();
		  self.videoControl();
		  self.searchInput();
		  self.replyToggle();
		  self.replyAccordion();
		  self.surveySelect();
		  self.textareaCount();
		  self.attachedFiles();
		  self.setDisclosure();
		  self.util.isScrolled();
		  self.util.searchResultPage();
		  self.countFiles();
		  // self.snsLike();
		  // ellipsis�� ��젣 �덉젙
		  self.util.ellipsis('.txt-box .txt-title', 40); // 硫붿씤 - 踰좎뒪�� 肄섑뀗痢� �쒕ぉ
		  self.util.ellipsis('.txt-box .txt-desc', 60); // 硫붿씤 - 踰좎뒪�� 肄섑뀗痢� �댁슜
		  self.util.ellipsis('.schedule-list .txt-title', 28); // gbs - �붽컙�몄꽦�� �쒕ぉ
		  self.util.ellipsis('.newsletter-list .txt-area .txt', 34); // T-Lounge �쒕툕硫붿씤 - 肄섑뀗痢� �쒕ぉ
		  self.util.ellipsis('.thumb-item .txt-box .subject', 86); // T-Now �대깽�� - 吏꾪뻾以묒씤 �대깽�� �쒕ぉ
		  self.util.ellipsis('.grid-desc > p', 40);
		  self.util.ellipsis('.board-list .subject', 42); // Support 由ъ뒪�� �쒕ぉ
		  $(document).on('click', '.sub-modal-bg', function (e) {
			e.stopImmediatePropagation();
			if ($(e.target).hasClass('sub-modal-bg')) {
			  self.modal.close();
			}
			// $searchBox.has(e.target).length === 0 && !$(e.target).hasClass('search-call-button')
		  });
		});
	  } else {
		self.gnb();
		self.gnb_2024();
		self.headerSearch();
		self.headerScroll();
		self.pagingActive();
		self.setDisclosure();
		self.searchResultSorting();
		self.pathIndicator();
		self.dateSelect.execute();
		self.datepicker();
		self.videoControl();
		self.searchInput();
		self.replyToggle();
		self.replyAccordion();
		self.surveySelect();
		self.textareaCount();
		self.attachedFiles();

		// ellipsis�� ��젣 �덉젙
		self.util.ellipsis('.txt-box .txt-title', 40);
		self.util.ellipsis('.txt-box .txt-desc', 55);
		self.util.ellipsis('.schedule-list .txt-title', 26);
		self.util.ellipsis('.thumb-item .txt-box .subject', 86);
		self.util.ellipsis('.newsletter-list .txt-area .txt', 34);
		self.util.ellipsis('.grid-desc > p', 40);
  
		$(document).on('click', '.sub-modal-bg', function (e) {
		  e.stopImmediatePropagation();
		  if ($(e.target).hasClass('sub-modal-bg')) {
			self.modal.close();
		  }
  
		  // $searchBox.has(e.target).length === 0 && !$(e.target).hasClass('search-call-button')
		});
	  }
	},
	update: function () {
	  if (typeof window.w3 !== 'undefined') {
		w3.includeHTML(function () {
		  //鍮꾨�踰덊샇 12�� �쒗븳 諛� �レ옄留� �낅젰
		  if ($('input[type=password]').length > 0 || $('input[type=number]').length > 0) {
			$('input[type=password]').on('keypress', function (e) {
			  var $this = $(this);
			  frontUI.preventOvertext(e, $this);
			});
			$('input[type=number]').on('input', function (e) {
			  var $this = $(this);
			  frontUI.preventOvertext(e, $this);
			});
		  }
		});
	  } else {
		//鍮꾨�踰덊샇 12�� �쒗븳 諛� �レ옄留� �낅젰
		if ($('input[type=password]').length > 0 || $('input[type=number]').length > 0) {
		  $('input[type=password]').on('keypress', function (e) {
			var $this = $(this);
			frontUI.preventOvertext(e, $this);
		  });
		  $('input[type=number]').on('input', function (e) {
			var $this = $(this);
			frontUI.preventOvertext(e, $this);
		  });
		}
	  }
	},
	gnb: function () {
	  var activeMenu = null,
		$header = $('.header'),
		$searchBox = $('.header .search-box');
  
	  $('.header .depth1 > li').on('click', function (e) {
		// $header.addClass('is-opened');
		if (activeMenu) {
		  activeMenu.removeClass('is-active').find('.depth2-area').stop().slideUp(200);
		}
		if ($searchBox.is(':visible')) {
		  $searchBox.css({ zIndex: 1 });
		}
		if ($(this).siblings().find('.depth2-area').is(':visible') || $(this).find('.depth2-area').is(':visible')) {
		  $(this).find('.depth2-area').show().end().siblings().find('.depth2-area').hide();
		}
		$(this).addClass('is-active').find('.depth2-area').stop().slideDown(200);
		$header.addClass('is-opened');
		activeMenu = $(this);
	  });
  
	  $('.header .gnb').on('mouseleave', function (e) {
		var $header = $('.header'),
		  $searchBox = $('.header .search-box');
  
		if (activeMenu) {
		  // if ($('.search-box').is(':hidden')) {
		  //     $header.removeClass('is-opened');
		  // }
		  if ($searchBox.is(':visible')) {
			$searchBox.css({ zIndex: 10 });
		  }
		  activeMenu.removeClass('is-active').find('.depth2-area').stop().slideUp(200);
		  $header.removeClass('is-opened');
		}
	  });
	},
	gnb_2024: function () {
	  var activeMenu = null,
		$header = $('.header_2024'),
		$searchBox = $('.header_2024 .search-box');
		$depth2Area = $('.header_2024 .depth2-area');
  
	  $('.header_2024 .depth1 > li').on('click', function (e) {
		// $header.addClass('is-opened');
		if (activeMenu) {
		  activeMenu.removeClass('is-active');
		}
		if ($searchBox.is(':visible')) {
		  $searchBox.css({ zIndex: 1 });
		}
		// if ($(this).siblings().find('.depth2-area').is(':visible') || $(this).find('.depth2-area').is(':visible')) {
		//   $(this).find('.depth2-area').show().end().siblings().find('.depth2-area').hide();
		// }
		$(this).addClass('is-active');
		$header.addClass('is-opened');
		$depth2Area.stop().slideDown(200);
		activeMenu = $(this);
	  });
  
	  $('.header_2024 .gnb').on('mouseleave', function (e) {
		if (activeMenu) {
		  // if ($('.search-box').is(':hidden')) {
		  //     $header.removeClass('is-opened');
		  // }
		  if ($searchBox.is(':visible')) {
			$searchBox.css({ zIndex: 10 });
		  }
		  activeMenu.removeClass('is-active');
          $depth2Area.find('.depth2-area').stop().slideUp(200);
		  $header.removeClass('is-opened');
		}
	  });
	},
	headerSearch: function () {
	  var $callBtn = $('.search-call-button'),
		$header = $('.header'),
		$searchBox = $('.search-box');
  
	  if ($('.content').hasClass('page-searchResult')) {
		return false;
	  }
  
	  $callBtn.on('click', function () {
		if ($header.hasClass('is-opened-search')) {
		  $header.removeClass('is-opened-search');
		  $searchBox.stop().slideUp(200, function () {
			$searchBox.removeAttr('style');
		  });
		} else {
		  $header.addClass('is-opened-search');
		  $searchBox.stop().slideDown(200);
		}
  
		if ($header.hasClass('is-opened')) {
		  $header.removeClass('is-opened');
		} else {
		  $header.addClass('is-opened');
		}
	  });
  
	  $(document).on('click', function (e) {
		// if ($('.content').hasClass('page-searchResult')) {
		//     return false;
		// }
		e.stopImmediatePropagation();
		var $searchBox = $('.search-box');
  
		if (
		  $searchBox.has(e.target).length === 0 &&
		  !$(e.target).hasClass('search-call-button') &&
		  !$(e.target).hasClass('depth1-button')
		) {
		  var $header = $('.header');
  
		  $header.removeClass('is-opened-search');
		  $searchBox.stop().slideUp(200, function () {
			$searchBox.removeAttr('style');
		  });
		  $('.depth1 > li').removeClass('is-active').find('.depth2-area').stop().slideUp(200); // Q. gnb �곸뿭 而⑦듃濡ㅼ씠 寃��됱쁺��뿉 �ㅼ뼱�붿쓬. 遺꾨━�좎닔 �녿뒗吏�?
		}
	  });
	},
	headerScroll: function () {
	  $(window).scroll(function () {
		var $header = $('.header'),
		  headerWidth = $header.width();
  
		if (headerWidth < 1200) {
		  $header.css({ left: 0 - $(window).scrollLeft() });
		}
	  });
  
	  $(window).resize(function () {
		var $header = $('.header');
  
		if ($(window).width() > 1200) {
		  $header.css({ left: 0 });
		}
	  });
	},
	pagingActive: function () {
	  var activeMenu = $('.paging button.is-active');
  
	  $('.paging').on('click', 'button', function () {
		if (activeMenu) {
		  activeMenu.removeClass('is-active');
		}
		$(this).addClass('is-active');
		activeMenu = $(this);
	  });
	},
	searchResultSorting: function () {
	  $('.sort-type > div').on('click', function () {
		$('.sort-type > div').addClass('is-active').not(this).removeClass('is-active');
	  });
	},
	countFiles: function () {
	  if (document.querySelector('.file-amount') === null) return;
	  document.querySelector('.file-amount').innerText = document.querySelectorAll('.file-badge > li').length;
	},
	setDisclosure: function () {
	  $('.set-disclosure input[type="radio"]').on('click', function (e) {
		var pw_field = document.querySelector('.set-disclosure input[type="password"]');
		if (e.target.classList.contains('show-all')) {
		  pw_field.setAttribute('disabled', true);
		} else {
		  pw_field.removeAttribute('disabled');
		}
	  });
	},
  
	classHandler: {
	  //[0]: [2]�� �대옒�ㅻ� 異붽��쒗궎嫄곕굹 ��젣�쒗궗 ���� �붿냼
	  //[1]: �대깽�� ��寃�
	  //[2]: 異붽��섍굅�� ��젣�� �대옒��
	  class_swipe: function () {
		$(arguments[0]).toggleClass(arguments[2]);
		$(arguments[1]).toggleClass(arguments[2]);
	  },
	  class_add: function () {
		$(arguments[0]).addClass(arguments[1]);
	  },
	},
  
	// 泥⑤��뚯씪 異붽� ��젣
	appendFile: {
	  append: function () {
		//arguments[0]�� 泥⑤��� �뚯씪�ㅼ쓣 �닿퀬 �덉쓬
		for (var i = 0; i < arguments[0].length; i++) {
		  var file = arguments[0][i];
		  var target_tag = '<li><span>' + file.name + '<button type="button" class="js-file-del"></button></span></li>';
		  $('.file-badge').append(target_tag);
  
		  var formData = new FormData();
		  formData.append('file_' + i, file);
		}
	  },
	  onceAppend: function () {
		//arguments[0]�� 泥⑤��� �뚯씪�ㅼ쓣 �닿퀬 �덉쓬
		for (var i = 0; i < arguments[0].length; i++) {
		  var file = arguments[0][i];
		  var target_tag = '<li><span>' + file.name + '<button type="button" class="js-file-del"></button></span></li>';
		  $('.file-badge').html(target_tag);
		  var formData = new FormData();
		  formData.set('file_' + i, file);
		}
	  },
	  // S: 泥⑤��� �뚯씪 ��젣�� ��
	  remove: function () {
		function target_search(del_target, depth) {
		  if (depth <= 0) return -1;
		  del_target.parent().hasClass('file-badge')
			? $(del_target).remove()
			: target_search(del_target.parent(), --depth);
		}
		target_search($(arguments[0].parent()), 5);
	  },
	  // E: 泥⑤��� �뚯씪 ��젣�� ��
	},
	// 泥⑤��뚯씪
	attachedFiles: function () {
	  $('.file-upload-wrap .file-submit').on('click', function (e) {
		$('input.file-input').trigger('click');
	  });
	  // S: �ㅼ쨷 �뚯씪 泥⑤�
	  $('.file-input').change(function () {
		var fileList = $(this)[0].files;
		if ($(this).hasClass('only-one')) {
		  frontUI.appendFile.onceAppend(fileList);
		} else {
		  frontUI.appendFile.append(fileList);
		}
	  });
	  // E: �ㅼ쨷 �뚯씪 泥⑤�
	},
	//鍮꾩뼱�덈뒗 form 寃���
	formCheck: {
	  //鍮꾩뼱�덈뒗 �� 媛�닔 �꾪꽣留� �⑥닔
	  filter_empty: function (target) {
		console.log('target', target);
		return target.filter(function (item) {
		  return item.value.length === 0;
		});
	  },
	  // 鍮꾩뼱�덈뒗 �쇱뿉 寃쎄퀬 �쒖떆
	  alert_empty: function (target) {
		for (var idx = 0; idx < target.length; idx++) {
		  //�곕씫泥� �� 以� �� 移몄씠�쇰룄 鍮꾩뼱�덉쓣 寃쎌슦 紐⑤몢 alert
		  //�곕씫泥섍� �ㅼ뼱媛��� input�� 媛먯떥�� �붿냼�� info-ph 異붽��섏뿬 �ъ슜�� 寃�
		  if ($(target[idx]).parent().hasClass('file-state')) {
			//泥⑤��뚯씪 寃���
			frontUI.classHandler.class_add($('.file-state'), 'is-active');
		  }
		  if ($(target[idx]).parent().hasClass('info-ph')) {
			// �곕씫泥� 寃���
			frontUI.classHandler.class_add($(target).siblings(), 'is-active');
		  } else {
			// 洹� �� form 寃���
			frontUI.classHandler.class_add($(target), 'is-active');
			frontUI.classHandler.class_add('.event.alert-msg', 'show');
		  }
		}
	  },
	},
	modal: {
	  $modalTarget: null,
	  currentScroll: null,
	  modal_type: '',
	  nowComment: null,
  
	  // 鍮꾨쾲 �낅젰 紐⑤떖 李� �닿린
	  open: function (name, type, _this) {
		this.modal_type && this.close('password-incorrect.modal3', this.modal_type);
		type !== null ? this.modal_type = type : this.modal_type;
  
		var self = this;
		$this = _this;
		
		console.log('紐⑤떖����22',this.modal_type);
		
		self.$modalTarget = $('.' + name);
		self.currentScroll = $(window).scrollTop();
		frontUI.util.scrollLock();
		$('body').css({ top: self.currentScroll * -1 });
		this.$modalTarget.addClass('type-' + this.modal_type); //紐⑤떖�� ���낆쓣 �뺥빀�덈떎(�섏젙紐⑤떖�몄�, ��젣 紐⑤떖�몄�)
		this.$modalTarget.addClass('is-active');
	  },
  
	  //紐⑤떖李� �リ린
	  close: function (_this) {
		var self = this;
		frontUI.util.scrollUnLock();
		this.$modalTarget.removeClass('type-' + this.modal_type);
		this.$modalTarget.removeClass('is-active');
		$('body').css({ top: 'auto' });
		$('html, body').scrollTop(self.currentScroll);
	  },
  
	  //��젣 紐⑤떖�� �덉쇅泥섎━
	  //鍮꾨쾲 �낅젰 紐⑤떖李� 鍮꾨쾲 遺덉씪移섑븷 寃쎌슦
	  modalFormCheck: function (_this) {
		var self = this; //�꾩옱 �쒖꽦�� �� 紐⑤떖李�
		var db_pw = '{{sdfsdf}}' //�꾩떆 PW 媛� 異뷀썑 ��젣 �� 寃�.
		var modal_pw = $('.js-modal-pw-value').val(); //紐⑤떖濡� �낅젰諛쏆� pw 媛�
  
		if (db_pw === modal_pw) {
		  // 鍮꾨쾲 �쇱튂��
		  if (this.$modalTarget.hasClass('type-edit')) {
			self.close();
			 // �� 怨녹뿉 �섏젙 �볤� 李쎌씠 �대━�� 濡쒖쭅�� �ㅼ뼱媛��� �⑸땲��.
		  } else {
			self.close();
			self.open('modal2'); // ��젣�섏뿀�듬땲�� 紐⑤떖李�
		  }
		} else if (modal_pw === '') {
		  self.close();
		  self.open('modal1');
		} else {
		  //鍮꾨쾲 遺덉씪移섏떆
		  self.close();
		  console.log('鍮꾨쾲 ��由� 紐⑤떖����',this.modal_type);
		  self.open('password-incorrect.modal3', this.modal_type);
		}
		$('.js-modal-pw-value').val(''); //紐⑤떖濡� �낅젰諛쏆� pw 媛� 珥덇린��
	  },
	},
  
	modeless: {
	  $modalTarget: null,
	  position: null,
	  currentScroll: null,
	  open: function () {
		var self = this,
		  name = null,
		  $this = null,
		  _arguments = arguments;
		switch (_arguments.length) {
		  case 1:
			name = _arguments[0];
			break;
		  case 2:
			name = _arguments[0];
			self.position = _arguments[1];
			break;
		  case 3:
			name = _arguments[0];
			$self = _arguments[1];
			self.position = _arguments[2];
		  default:
			return false;
		}
		self.$modalTarget = $('.' + name);
  
		if (self.position !== null) {
		  self.$modalTarget.children().css({ top: self.position[0], left: self.position[1] });
		} else if (self.position === null) {
		  self.currentScroll = -1 * $(window).scrollTop();
		  $('body').css({
			overflow: 'hidden',
			position: 'fixed',
			// 'width': '100%',
			// 'height': '100%',
			top: self.currentScroll,
		  });
		}
		this.$modalTarget.addClass('is-active');
	  },
  
	  close: function (_this) {
		var self = this;
		if (self.position === null) {
		  $('body').css({
			overflow: 'auto',
			top: 'auto',
			position: 'relative',
			// 'width': 'auto',
			// 'height': 'auto'
		  });
		}
		this.$modalTarget.removeClass('is-active');
	  },
	},
	pathIndicator: function () {
	  var $pathButton = $('.path .path-text');
	  var $pathPanelVisible = null;
  
	  $pathButton.on('click', function (e) {
		e.stopPropagation();
  
		if ($pathPanelVisible) {
		  $pathPanelVisible.stop().slideUp(200);
		}
		if ($(this).next().is(':hidden')) {
		  $(this).next().stop().slideDown(200);
		} else {
		  $(this).next().stop().slideUp(200);
		}
		$pathPanelVisible = $(this).next();
	  });
  
	  $(document).on('click', function (e) {
		e.stopImmediatePropagation();
		var $panel = $('.path-indicator');
  
		if ($panel.has(e.target).length === 0 && !$(e.target).hasClass('path-text')) {
		  $panel.find('.path-panel:visible').stop().slideUp(200);
		}
	  });
	},
	dateSelect: {
	  $dateButton: $('.date-text'),
	  $datePanel: $('.date-panel'),
	  execute: function () {
		this.open();
		this.select();
		this.close();
	  },
	  open: function () {
		var self = this;
  
		self.$dateButton.on('click', function () {
		  if (self.$datePanel.is(':hidden')) {
			self.$datePanel.stop().slideDown(200);
		  }
		});
	  },
	  select: function () {
		var self = this;
  
		self.$datePanel.on('click', function () {
		  alert('click!');
		});
	  },
	  close: function () {
		var self = this;
  
		if (self.$datePanel.is(':visible')) {
		  self.$datePanel.stop().slideUp(200);
		}
  
		$(document).on('click', function (e) {
		  e.stopImmediatePropagation();
		  if (self.$datePanel.has(e.target).length === 0 && !$(e.target).hasClass('date-text')) {
			self.$datePanel.stop().slideUp(200, function () {
			  // $datePanel.removeAttr('style');
			});
		  }
		});
	  },
	},
	// �щ젰
	datepicker: function () {
	  var opts = {
		closeText: '�リ린',
		currentText: '�ㅻ뒛',
		prevText: '�댁쟾 ��',
		nextText: '�ㅼ쓬 ��',
		monthNames: ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��'],
		monthNamesShort: ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��'],
		dayNames: ['��', '��', '��', '��', '紐�', '湲�', '��'],
		dayNamesShort: ['��', '��', '��', '��', '紐�', '湲�', '��'],
		dayNamesMin: ['��', '��', '��', '��', '紐�', '湲�', '��'],
		weekHeader: '',
		yearSuffix: '��',
		dateFormat: 'yy.mm.dd',
		showButtonPanel: false,
		changeMonth: true,
		changeYear: true,
		showOn: 'both',
		buttonText: '�щ젰',
		showOtherMonths: true, // �섎㉧吏� �좎쭨�� �붾㈃�� �쒖떆, �좏깮�� 遺덇�
		showMonthAfterYear: true,
	  };
  
	  $('.datepicker').each(function () {
		$(this).find('input[type=text]').datepicker(opts);
	  });
	},
	// �곸긽 �뚮젅��, 硫덉땄
	videoControl: function () {
	  var $btnPlayer = $('.btn-player');
  
	  $btnPlayer.on('click', function (e) {
		e.stopPropagation();
		if ($(this).hasClass('stop')) {
		  $(this).removeClass('stop').text('�곸긽 硫덉땄');
		  $(this).closest('.video-box').find('video').trigger('play');
		} else {
		  $(this).addClass('stop').text('�곸긽 �ъ깮');
		  $(this).closest('.video-box').find('video').trigger('pause');
		}
	  });
	},
	searchInput: function () {
	  // 21.06.15 異붽�
	  $('.js-input').on('input', function (e) {
		if ($(this).val().length >= 1) {
		  console.log($(this).closest('.js-input-field').find('.js-clear-btn'));
		  $(this).closest('.js-input-field').find('.js-clear-btn').addClass('clear');
		} else {
		  $(this).closest('.js-input-field').find('.js-clear-btn').removeClass('clear');
		}
	  });
  
	  $('.js-input').on('input', function (e) {
		if ($(this).val().length >= 1) {
		  $(this).closest('.js-input-field').find('.js-clear-btn').addClass('clear');
		}
	  });
  
	  $('.js-input-field').on('click', '.js-clear-btn', function (e) {
		$(this).closest('.js-input-field').find('.js-input').val('').end().find('.js-clear-btn').removeClass('clear');
	  });
	  $('.wrap-set-disclosure input[type="radio"]').on('input', function (e) {
		var setAttr = document.querySelector('.set-password input[type="password"]');
		if (e.target.getAttribute('checked')) {
		  setAttr.setAttribute('disabled', true);
		} else {
		  $('.set-password').find('input[type="password"]').attr('disabled', false);
		}
		// $(e.target).attr('checked') ===  'checked' ? $('.set-password').find('input[type="password"]').attr('disabled',true) :
	  });
  
	  // $('.js-input').on('blur', function() {
	  //     if ($(this).val().length === 0) {
	  //         $(this).closest('.js-input-field').find('.js-clear-btn').removeClass('clear');
	  //     }
	  // });
	},
	// �볤� �곸뿭 �닿퀬 �リ린
	replyToggle: function () {
	  $('.js-reply').on('click', function () {
		$(this).toggleClass('is-active');
		$('.comment-area.tfocus')
		  .stop()
		  .slideToggle(400, function () {
			$('.comment-area.tfocus').toggleClass('show');
		  });
	  });
	},
	// �볤� �곸뿭�� �꾨옒�곸뿭留� �닿퀬 �リ린 - �ㅻЦ議곗궗
	replyAccordion: function () {
	  $('.see-more-reply').on('click', function () {
		if ($(this).hasClass('is-opened')) {
		  $(this).removeClass('is-opened').text('�볤� �붾낫湲�').parent().prev('.comment-body').removeClass('is-opened');
		} else {
		  $(this).addClass('is-opened').text('�볤� �묎린').parent().prev('.comment-body').addClass('is-opened');
		}
	  });
	},
	// �ㅻЦ議곗궗 ��ぉ �좏깮
	surveySelect: function () {
	  $('.survey-result:not(".finished") .bar-list .bar-outer').on('click', function (event) {
		// 泥댄겕諛뺤뒪
		if ($(this).find('input').attr('type') === 'checkbox') {
			if ($(this).find('input').prop('checked') === false) {
				$(this).removeClass('is-checked');
			} else {
				$(this).addClass('is-checked');
			}
		}
		// �쇰뵒��
		if ($(this).find('input').attr('type') === 'radio') {
			if ($(this).find('input').prop('checked') === false) {
				$(this).removeClass('is-checked');
			} else {
				$(this).addClass('is-checked').siblings('.bar-outer').removeClass('is-checked');
			}
		}
	  });
	},
	// �띿뒪�� �먯씠由ъ뼱 移댁슫��
	textareaCount: function () {
	  var $textarea = $('.textarea-wrap .form-style');
	  $textarea.each(function () {
		$(this).on('input', function () {
		  var textLength = $(this).val().length;
		  if (textLength > 200) {
			return false;
		  }
		  $(this).closest('.textarea-wrap').find('.text-counter').find('span').text(textLength);
		});
	  });
	},
	util: {
	  isScrolled: function () {
		var $header = $('header.header');
  
		$(window).scroll(function () {
		  var winScroll = $(window).scrollTop();
  
		  if (winScroll === 0) {
			$header.removeClass('is-scrolled');
  
			return false;
		  }
		  $header.addClass('is-scrolled');
		});
	  },
	  searchResultPage: function () {
		var $header = $('.header'),
		  $content = $('.content');
  
		if ($content.hasClass('page-searchResult')) {
		  $header.addClass('is-opened-search');
		}
	  },
	  ellipsis: function (target, maxLength) {
		//��젣 ��湲�
		var ellipsis = '��';
  
		$(target).each(function () {
		  var textLength = $(this).text().length;
  
		  if (textLength > maxLength) {
			$(this).text($(this).text().substr(0, maxLength) + ellipsis);
		  }
		});
	  },
	  scrollLock: function () {
		$('body').addClass('scroll-lock');
	  },
	  scrollUnLock: function () {
		$('body').removeClass('scroll-lock');
	  },
	},
	preventOvertext: function (event, $this) {
	  var maxlength = $this.attr('maxlength');
	  var value = $this.val();
	  //�レ옄留� 諛쏄린�꾪븳 肄붾뱶
	  if (event.which && (event.which <= 47 || event.which >= 58) && event.which != 8) event.preventDefault();
	  if (value && value.length > maxlength) {
		$this.val(value.substr(0, maxlength));
	  }
	},
	snsLike: function () {
		var heartImg = document.querySelector('button.js-like');
		var base_url = '../home/images/ico_';

		heartImg.addEventListener('click', function (e) {
		  //:S 醫뗭븘�� 踰꾪듉�� �섑듃瑜� �댁� span �쒓렇 異붿텧
		  var snsHeart = Array.from(e.currentTarget.childNodes);
		  snsHeart = snsHeart
			.filter(function (item) {
			  return item.getAttribute('class', 'sns-heart');
			})
			.pop();
		  //:E 醫뗭븘�� 踰꾪듉�� �섑듃瑜� �댁� span �쒓렇 異붿텧
	
		  if (e.currentTarget.getAttribute('id') === 'heart_on') {
			// 議곌굔臾� �덉쓽 'heart_on' �� 遺�遺꾩쓣 醫뗭븘�� �대┃ �� �곹깭�� id 媛믪쑝濡� ��泥댄빐 二쇱꽭��
			snsHeart.style.background = 'url(' + base_url + 'heart_on.png) no-repeat';
		  } else {
			snsHeart.style.background = 'url(' + base_url + 'heart_off.png) no-repeat';
		  }
		});
	},
	snsLike2: function () {
	  var onHeart = document.querySelector('button.js-like');
	  $(onHeart).addClass('is-active');
	},
  };
  
  $(function () {
	frontUI.init();
	frontUI.update();
	/* ��젣 ��湲� */
  });
  
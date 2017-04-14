	package com.businessintelli.mvp.model;

	import java.io.Serializable;

	public class Consumer implements Serializable {

		/**
		 *
		 */
		private static final long serialVersionUID = 4631931421434602873L;
		private String pfirstName;
		private String pmiddleName;
		private String plastName;
		private String pEmail;
		private String pPhone;
		private String pStatus;
		private String pHandle;
		private int pId;

		public String getfirstName() {
			return pfirstName;
		}

		public void setfirstName(String value) {
			this.pfirstName = value;
		}

		public String getmiddleName() {
			return pmiddleName;
		}

		public void setmiddleName(String value) {
			this.pmiddleName = value;
		}

		public String getlastName() {
			return plastName;
		}

		public void setlastName(String value) {
			this.plastName = value;
		}

		public String getEmail() {
			return pEmail;
		}

		public void setEmail(String value) {
			this.pEmail = value;
		}

		public String getPhone() {
			return pPhone;
		}

		public void setPhone(String value) {
			this.pPhone = value;
		}

		public String getStatus() {
			return pStatus;
		}

		public void setStatus(String value) {
			this.pStatus = value;
		}

		public String getHandle() {
			return pHandle;
		}

		public void setHandle(String value) {
			this.pHandle = value;
		}

		public int getId() {
			return pId;
		}

		public void setId(int value) {
			this.pId = value;
		}

		@Override
		public String toString() {
			return "Consumer [pfirstName=" + pfirstName + ", pmiddleName=" + pmiddleName + ", plastName=" + plastName
					+ ", pEmail=" + pEmail + ", pPhone=" + pPhone + ", pStatus=" + pStatus + ", pHandle=" + pHandle
					+ ", pId=" + pId + "]";
		}




	}

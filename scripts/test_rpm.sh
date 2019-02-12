EXECUTE_TEST=$1
#pip install tox
echo -e "# # # # # # # START : Testing RPM against Database # # # # # # #"
yum install python34-setuptools
easy_install-3.4 pip
pip install tox
tox -e ${EXECUTE_TEST}
echo -e "# # # # # # # END : Testing RPM against Database # # # # # # #"